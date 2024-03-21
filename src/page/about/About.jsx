import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className='mainAbout'>
      <div className="aboutImg">
        <img src="https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>
      <div className="aboutData">
        <h1>Our history</h1>
        <p>TripTrek is owned and managed by Triptrek.in Pvt.Ltd. a leading brand in web desgining services and e-commerce solutions. Triptrek. in Pvt. Ltd. is counted for its expertise in Web Solutions and its top ranking buisness portals. Our invincible and rich experience has raised our spirits to reach ahead from our clients expectation. Commendable success rate of other portals manged by Travelers is a live program of our work excellence</p>

        <h1>Our Mission</h1>
        <p>Our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients, that too with ultimate transparency and cost-effectivness</p>

        <h1>Our Vision</h1>
        <p>To sow the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients</p>
      </div>
    </div>
  );
};

export default About;
