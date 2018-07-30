import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TaskBoard from "./Component/task-board/TaskBoard";

ReactDOM.render(<TaskBoard />, document.getElementById('root'));
registerServiceWorker();
