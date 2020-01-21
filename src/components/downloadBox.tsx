import React from 'react';
import styled from 'styled-components';
import testFiles from '../assets/images/TestFiles.zip';

const DownloadBox = () => {
  console.log(testFiles)
  return (
    <Div>
      <p>
        Download{' '}
        <a href={testFiles} download>
          THIS
        </a>
        {' '}files and test the different validations :)
      </p>
    </Div>
  );
};

const Div = styled.div`
  position: absolute;
  bottom: 1rem;
  width: 400px;
  p {
    text-align: center;
  }
`;

export default DownloadBox;
