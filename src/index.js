import React from 'react';
import ReactDOM from 'react-dom/client';
import './estilos/index.css';
import App from './funciones/App';
import Posts from './funciones/Posts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div>
    <App/>
  </div>
  <div>
    <Posts/>
  </div>
  </>
); 