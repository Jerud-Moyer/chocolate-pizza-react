import React from 'react';
import Header from './pizza-header.js';
import ImageHeader from './imgheader.js'
import MainContent from './mainContent.js'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <ImageHeader />
      <MainContent />
    </div>
  );
}

export default App;
