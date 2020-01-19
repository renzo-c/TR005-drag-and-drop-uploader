import React from 'react';
import ReactDOM from 'react-dom';

import { createGlobalStyle } from 'styled-components';
import { DragAndDropUploader } from './components/dragAndDropUploader';

const App = () => (
  <>
    <GlobalStyle />
    <DragAndDropUploader />
  </>
);

const GlobalStyle = createGlobalStyle`
  body, html {
    font-family: 'Proxima Nova';
    font-size: 12px;
    font-weight: lighter;
    background-color: #f5f9ff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin:0px;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
