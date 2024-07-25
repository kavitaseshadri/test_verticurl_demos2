import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UseEffectApp from './UseEffectApp';
import UseEffectApp2 from './UseEffectApp2';
import UseEffectApp3 from './UseEffectApp3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseEffectApp />
    <UseEffectApp2 />
    <UseEffectApp3 />
  </React.StrictMode>
);


