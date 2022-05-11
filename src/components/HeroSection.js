import React from 'react';

import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {

  const handleLogin = ()=>{
   
  }
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Welcome to the Expand</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleLogin}
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
