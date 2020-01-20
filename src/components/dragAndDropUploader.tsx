import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Header } from './header';
import { DropArea } from './dropArea';

const CLOUDINARY_URL =
  'https://api.cloudinary.com/v1_1/nihilist-penguin/image/upload';

const CLOUDINARY_UPLOAD_PRESET = 'yo0wlc3u';

const DragAndDropUploader = () => {
  const dropRef = useRef(null);
  const [highlightBox, setHighlightBox] = useState(false);
  const [image, setImage] = useState('/image-loader.fbe060da.png');
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

  const uploadFile = file => {
    setLoaderSpinner(true);
    let formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    fetch(CLOUDINARY_URL, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(res => {
        setImage(res.secure_url);
        setLoaderSpinner(false);
        setDragDropTitle('Drag & drop here to replace');
      })
      .catch(err => console.log('err', err));
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
  border: 1px solid #e8f1fb;
  align-self: center;
  background-color: white;
`;

export { DragAndDropUploader };
