import React from 'react';
import logo from '../assets/images/logo.png';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <Container style={{ backgroundColor: 'white' }}>
        <Title>Company Logo</Title>
        <Description>
          Logo should be square, 100px size and in png, jpeg file format.
        </Description>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin: auto;
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
