import React from 'react';
import styled from 'styled-components';

const DragAndDropUploader = () => {
  return (
    <Screen>
      <UploadContainer>This is a DragAndDropUploader</UploadContainer>;
    </Screen>
  );
};

const Screen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100wh;
`;

const UploadContainer = styled.div`
  width: 400px;
  height: 590px;
  background-color: red;
`;

export { DragAndDropUploader };
