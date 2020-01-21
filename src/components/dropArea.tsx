import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { LoaderImage } from './loaderImage';
import LoaderSpinner from './loaderSpinner';

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
    if (file) {
      uploadFile(file);
    }
  };

  return (
    <Container ref={dropRef} highlight={highlight}>
      {loaderSpinner ? <LoaderSpinner /> : <LoaderImage image={image} />}
      <P1>{dragDropTitle}</P1>
      <P2>- or -</P2>
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
  border-bottom-right-radius: 5%;
  border-bottom-left-radius: 5%;
`;

const TextLink = styled.label`
  cursor: pointer;
  text-decoration: none;
  color: #4991e5;
`;

const Input = styled.input`
  display: none;
`;

const P1 = styled.p`
  margin: 0.5rem 0 0;
  font-family: 'Proxima Nova Thin';
`;
const P2 = styled.p`
  margin: 0.5rem 0;
  font-family: 'Proxima Nova Thin';
`;

export { DropArea };
