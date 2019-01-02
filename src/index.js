import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Demo from './Demo';
import registerServiceWorker from './registerServiceWorker';
import TruyenDulieu from './TruyenDulieu.js'
ReactDOM.render(<TruyenDulieu />, document.getElementById('root'));
registerServiceWorker();
