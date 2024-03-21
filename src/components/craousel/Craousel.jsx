import React from 'react';
import { CCarousel, CCarouselItem } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';
import './style.css';
import API from '../../apiHelper/CraouselApi';
import { Link } from 'react-router-dom';

const Carousel = () => {
  return (
    <div className="main">
      <CCarousel controls indicators>
        {API.map(({ id, url, price, name, collection }) => (
          <CCarouselItem className="slides" key={id}>
            <img className="Cimg" src={url} alt="" />
            <div className="data">
              <p>Packages start from {price}</p>
              <h1>{name}</h1>
              <Link to={`/packages/${collection}`}>
                <button className="btn">Discover more</button>
              </Link>
            </div>
          </CCarouselItem>
        ))}
      </CCarousel>
    </div>
  );
};

export default Carousel;
