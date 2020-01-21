import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <Container style={{ backgroundColor: 'white' }}>
        <Title>Company Logo</Title>
        <Description>
          Logo should be square, less than 100px size and in png, jpeg file format.
        </Description>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: auto;
  @media (min-width: 320px) and (max-width: 768px) {
    padding-left: 0.5rem;
    border-top-left-radius: 25%;
    border-top-right-radius: 25%;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 0px;
`;

const Description = styled.p`
  font-size: 12px;
  font-family: 'Proxima Nova Thin';
  margin-top: 0.5rem;
`;

export { Header };
