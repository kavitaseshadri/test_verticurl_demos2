import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BookApp from './BookApp'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookApp />
  </React.StrictMode>
);


