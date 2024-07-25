import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CounterPageApp1 from './CounterPageApp1';
import CounterPageApp2 from './CounterPageApp2';
import CounterPageApp3 from './CounterPageApp3';
import CounterPageApp4 from './CounterPageApp4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <CounterPageApp1 />
    <CounterPageApp2 />
    <CounterPageApp3 />
    <CounterPageApp4 />
  </React.StrictMode>
);

