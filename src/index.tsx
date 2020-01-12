import React from 'react';
import ReactDOM from 'react-dom';

import {DragAndDropUploader} from './components/dragAndDropUploader';

const App = () => (
  <>
    <DragAndDropUploader />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
