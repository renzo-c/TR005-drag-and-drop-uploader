import React from 'react';
import styled from 'styled-components';

const LoaderImage = ({ image }) => {
  return (
    <>
      <ImgContainer>
        <Img src={image} alt='' />
      </ImgContainer>
    </>
  );
};

const ImgContainer = styled.div`
  border: 2px solid #e8f1fb;
  border-radius: 50%;
  margin-bottom: 0.5rem;
`;

const Img = styled.img`
  width: 70px;
  height: 70px;
  padding: 1.5rem;
`;

export { LoaderImage };
