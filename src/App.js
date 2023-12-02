// src/App.js
import React, { useEffect, useState } from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Work from './Component/work';
import Project from './Component/project';
import  './App.css';


const App = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const circularCursor = document.querySelector('.circular-cursor');
console.log("circularCursor.style.left",circularCursor.style.left)
      if (circularCursor) {
        circularCursor.style.left = e.pageX + 'px';
        circularCursor.style.top = e.pageY + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
       <div className="circular-cursor"></div>
    <div className='main-div'>
      <Navbar currentSection={currentSection} handleNavigation={handleNavigation} />
      <div>

      {currentSection === 'home' && <Home />}
      {currentSection === 'work' && <Work />}
      {currentSection === 'projects' && <Project />}
      </div>
    </div>
    </>
  );
};

export default App;
