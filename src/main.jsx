// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './Portfolio.jsx';
import './index.css';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> 
      <Portfolio />
    </HashRouter>
  </React.StrictMode>
);