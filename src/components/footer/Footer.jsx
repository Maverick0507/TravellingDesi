import './style.css';
import React from 'react';
import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { SiLinkedin } from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {

  return (
    <div className='fotter'>
      <div className="footerMain">
        <div className="Footerlogo">
          <h2> Bon Voyage</h2>
          <p>Choose your favourite destination</p>
        </div>
        <div className="social">
          <BsFacebook className='Sicons' />
          <AiFillTwitterCircle className='Sicons'/>
          <SiLinkedin className='Sicons'/>
          <BsGithub className='Sicons'/>
        </div>
      </div>
      <div className="footerItem">
        <div className="item1">
          <h3>Project</h3>
          <p>Catlog</p>
          <p>Status</p>
          <p>License</p>
          <p>All version</p>
        </div>
        <div className="item2"><h3>Help</h3>
          <p>Support</p>
          <p>TroubleShooting</p>
          <p>Contact us</p>
          <p>License</p>
        </div>
        <div className="item3"><h3>Community</h3>
          <p>Leetcode</p>
          <p>Github</p>
          <p>Twitter</p>
          <p>Linkedin</p>
        </div>
        <div className="item4"><h3>Others</h3>
          <p>Tems and Condition</p>
          <p>Privacy policy</p>
          <p>Service</p>
          <p>Copyright @ ayush_kt05</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
