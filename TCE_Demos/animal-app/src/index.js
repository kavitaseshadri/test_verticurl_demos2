import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AnimalApp1 from './AnimalApp1';
import AnimalApp2 from './AnimalApp2';
import AnimalApp3 from './AnimalApp3';
import AnimalApp4 from './AnimalApp4';
import AnimalApp5 from './AnimalApp5';
import AnimalApp6 from './AnimalApp6';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>AnimalApp1</h1>
    <AnimalApp1 />
    <h1>AnimalApp2</h1>
    <AnimalApp2 />
    <h1>AnimalApp3</h1>
    <AnimalApp3 />
    <h1>AnimalApp4</h1>
    <AnimalApp4 />
    <h1>AnimalApp5</h1>
    <AnimalApp5 />
    <h1>AnimalApp6</h1>
    <AnimalApp6 />
  </React.StrictMode>
);


