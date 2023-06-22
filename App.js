import React from 'react';
import './App.css';


import Header from './component/Header';
import About from './component/About';
import Education from './component/Education';
import Skills from './component/Skills';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';


function App() {
  return (
    <div className="container">
      <Header />
      <About/>
        <Education/>
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>
      
    
      
    </div>
  );
}

export default App;
