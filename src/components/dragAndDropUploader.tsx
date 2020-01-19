import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { Header } from './header';
import { DropArea } from './dropArea';

const DragAndDropUploader = () => {
  const dropRef = useRef(null);
  const [highlightBox, setHighlightBox] = useState(false);

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
  }

  const uploadFile = (file) => {
    console.log([file]);
    let url = "www.site.com";
    let formData = new FormData();

    formData.append('file', file);
    setTimeout(() => {
      console.log(formData.get('file'));
    }, 2200);
  }

  console.log(highlightBox);
  return (
    <UploadContainer highlight={highlightBox}>
      <Header />
      <DropArea dropRef={dropRef} highlight={highlightBox}/>
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
