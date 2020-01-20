import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { LoaderImage } from './loaderImage';

const DropArea = ({
  dropRef,
  highlight,
  image,
  dragDropTitle,
  loaderSpinner,
  uploadFile
}) => {
  const refInput = useRef(null);

  useEffect(() => {}, []);

  const handleSubmit = file => {
    uploadFile(file);
  };
  
  return (
    <Container ref={dropRef} highlight={highlight}>
      {loaderSpinner ? (
        <>...Loading</>
      ) : (
        <LoaderImage image={image} dragDropTitle={dragDropTitle} />
      )}
      <TextLink htmlFor='file-input'>
        Select file to upload
        <Input
          type='file'
          id='file-input'
          ref={refInput}
          onChange={e => handleSubmit(e.target.files[0])}
        />
      </TextLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.highlight ? '#f5f9ff' : 'white')};
  border-top: 1px solid #e8f1fb;
  flex-grow: 1;
`;

const TextLink = styled.label`
  cursor: pointer;
  text-decoration: none;
  color: #4991e5;
`;

const Input = styled.input`
  display: none;
`;

export { DropArea };
