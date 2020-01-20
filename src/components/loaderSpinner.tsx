import React from 'react';
import styled from 'styled-components';

const LoaderSpinner = () => {
  return (
    <Div>
      <i className='fa fa-cog fa-spin' />
    </Div>
  );
};

const Div = styled.div`
  font-size: 50px;
`;

export default LoaderSpinner;
