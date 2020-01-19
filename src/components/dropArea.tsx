import React from 'react';
import styled from 'styled-components';
import { LoaderImage } from './loaderImage';

const DropArea = ({dropRef, highlight}) => {
  return (
    <Container ref={dropRef} highlight={highlight}>
      <LoaderImage />
      <TextLink href=''>Select file to upload</TextLink>
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

const TextLink = styled.a`
  text-decoration: none;
  color: #4991e5;
`;

export { DropArea };
