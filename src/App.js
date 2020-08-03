import React from 'react';
import Header from './pizza-header.js';
import ImageHeader from './imgheader.js'
import './App.css';

const assets = [
  '../assets/logo.jpg',
  '../assets/fb-icon.jpg',
  '../assets/twit-icon.jpg',
  '../assets/gp-icon.jpg"',
  '../assets/insta-icon.jpg',
  '../assets/flic-icon.jpg',
  '../assets/pint-icon (1).jpg',
  '../assets/rss-icon.jpg',
  '../assets/mail-icon.jpg'
]

function App() {
  return (
    <div className="App">
      <Header src={assets.map(photo => {
        return photo
      })} />
      <ImageHeader />
    </div>
  );
}

export default App;
