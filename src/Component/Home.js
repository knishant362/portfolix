// src/components/Home.js
import React from 'react';
import portfolioImage from '../assets/portfolio.jpeg';

const Home = () => {
  return (
    <div className='home-main'>
      <div>
        <h1>Hi, I'm Nishant</h1>
        <h2>
          Mobile Application Developer
        </h2>
        <h2>Android,Kotlin,Flutter and IOS</h2>
      </div>

      <div className='profile'>
        <img src={portfolioImage} alt='Portfolio' className='profile-img' />
      </div>
    </div>
  );
};

export default Home;
