import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ContainerApp from './ContainerApp';
import FlexApp from './FlexApp';
import GridApp from './GridApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContainerApp />
    <FlexApp />
    <GridApp />
  </React.StrictMode>
);

