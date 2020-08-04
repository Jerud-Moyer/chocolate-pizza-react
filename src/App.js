import React from 'react';
import Header from './pizza-header.js';
import ImageHeader from './imgheader.js';
import MainContent from './mainContent.js';
import BigImage from './BigImage.js';
import Footer from './Footer.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <hr id="hr-1"></hr>
      <ImageHeader />
      <BigImage />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
