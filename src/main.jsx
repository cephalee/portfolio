import React from 'react';
import ReactDOM from 'react-dom/client';
import Portefolio from './Portfolio.jsx';
import './index.css';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter basename="/portfolio/">
      <Portefolio />
    </HashRouter>
  </React.StrictMode>
);
