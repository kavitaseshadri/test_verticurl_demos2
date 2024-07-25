import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProfileApp1 from './ProfileApp1';
import ProfileApp2 from './ProfileApp2';
import ProfileApp3 from './ProfileApp3';
import ProfileApp4 from './ProfileApp4';
import ProfileApp5 from './ProfileApp5';
import ProfileApp6 from './ProfileApp6';
import ProfileApp7 from './ProfileApp7';
import ProfileApp8 from './ProfileApp8';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <h1>Profile App1</h1>
    <ProfileApp1 />
    <h1>Profile App2</h1>
    <ProfileApp2 />
    <h1>Profile App3</h1>
    <ProfileApp3 />
    <h1>Profile App4</h1>
    <ProfileApp4 />
    <h1>Profile App5</h1>
    <ProfileApp5 />
    <h1>Profile App6</h1>
    <ProfileApp6 />
    <h1>Profile App7</h1>
    <ProfileApp7 />
    <h1>Profile App8</h1>
    <ProfileApp8 />
  </React.StrictMode>
);


