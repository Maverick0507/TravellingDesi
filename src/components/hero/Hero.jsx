import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import traveler from '../../assets/image/traveler.webp'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate()
 

  return (
    <div className='hero'>
      <div className='hero-image-div' >
        <img className='hero-image' src={traveler} alt='' />
      </div>
      <div className='hero-data'>
        <div className='heading'>
          <h3>We specialize in</h3>
          <h3>
            Small <span className='heading-span'>group vacations</span>
          </h3>
        </div>
        <div className='para'>
          <p>
            <BsArrowRightCircleFill className='para-icon' />
            A true traveler has no fixed plans
          </p>
          <p> Unexpected plans always</p>
          <p> bring thrills to boring life</p>
        </div>
        <div className='para'>
          <p>
            <BsArrowRightCircleFill className='para-icon' />
            Places to stay around INDIA
          </p>
          <p> India is a highly diverse country</p>
          <p> there are many gems to explore here.</p>
        </div>
        <div className='hero-buttons'>
          <button onClick={()=>navigate('/about')} className='btn-1'>about company</button>
          <button className='btn-1'>discover tour</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
