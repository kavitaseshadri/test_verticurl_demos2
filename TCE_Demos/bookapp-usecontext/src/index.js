import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UseContextBookApp from './UseContextBookApp'
import { Provider } from './context/books';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <UseContextBookApp />
    </Provider>
  </React.StrictMode>
);


