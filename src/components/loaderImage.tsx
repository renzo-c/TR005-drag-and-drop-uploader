import React from 'react';
import styled from 'styled-components';

const LoaderImage = ({ image, dragDropTitle }) => {
  return (
    <>
      <ImgContainer>
        <Img src={image} alt='' />
      </ImgContainer>
      <P1>{dragDropTitle}</P1>
      <P2 className='P2'>- or -</P2>
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

const P1 = styled.p`
  margin: 0.5rem 0 0;
  font-family: 'Proxima Nova Thin';
`;
const P2 = styled.p`
  margin: 0.5rem 0;
  font-family: 'Proxima Nova Thin';
`;

const Div = styled.div`
  margin: 0.5rem auto;
`;

export { LoaderImage };
