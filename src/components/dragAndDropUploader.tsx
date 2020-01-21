import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Header } from './header';
import { DropArea } from './dropArea';
import axios from 'axios';
import { isValidFormat } from '../assets/helperFunctions';
import imageLoader from '../assets/images/image-loader.png';
import * as dotenv from 'dotenv';

dotenv.config();

const CLOUDINARY_URL = process.env.CLOUDINARY_URL;

const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET;

const DragAndDropUploader = () => {
  const dropRef = useRef(null);
  const [highlightBox, setHighlightBox] = useState(false);
  const [image, setImage] = useState(imageLoader);
  const [dragDropTitle, setDragDropTitle] = useState('Drag & drop here');
  const [loaderSpinner, setLoaderSpinner] = useState(false);

  useEffect(() => {
    let dropArea = dropRef.current;
    ['dragenter', 'dragover'].forEach(eventName => {
      dropArea.addEventListener(eventName, fileBringIn, false);
    });
    ['dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, fileBringOut, false);
    });
    dropArea.addEventListener('drop', handleDrop, false);
  }, []);

  const preventDefaults = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  const fileBringIn = e => {
    preventDefaults(e);
    setHighlightBox(true);
  };

  const fileBringOut = e => {
    preventDefaults(e);
    setHighlightBox(false);
  };

  const handleDrop = e => {
    let dt = e.dataTransfer;
    let files = dt.files;
    uploadFile(files[0]);
  };

  const callToAxios = formData => {
    axios({
      url: CLOUDINARY_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    })
      .then(({ data: { url } }) => {
        setLoaderSpinner(false);
        setImage(url);
      })
      .catch(err => console.log(err));
  };
  const uploadFile = file => {
    setLoaderSpinner(true);
    let formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    if (!file.type || !isValidFormat(file.type.substring(6))) {
      alert('Only jpeg and png files are allowed');
      setLoaderSpinner(false);
    } else {
      let image = new Image();

      image.onload = function() {
        if (image.width >= 100 || image.height >= 100) {
          alert('Sides should measure less than 100px');
          setLoaderSpinner(false);
        } else if (image.width !== image.height) {
          alert('All sides should length the same');
          setLoaderSpinner(false);
        } else {
          callToAxios(formData);
        }
      };

      image.src = window.URL.createObjectURL(file);
    }
  };

  return (
    <UploadContainer highlight={highlightBox}>
      <Header />
      <DropArea
        dropRef={dropRef}
        highlight={highlightBox}
        image={image}
        dragDropTitle={dragDropTitle}
        loaderSpinner={loaderSpinner}
        uploadFile={uploadFile}
      />
    </UploadContainer>
  );
};

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 590px;
  border: 3px solid #e8f1fb;
  align-self: center;
  background-color: white;
  border-radius: 5%;
  @media (min-width: 320px) and (max-width: 768px) {
    width: 300px;
  }
`;

export { DragAndDropUploader };
