import React from 'react'
import './style.css'
import {CCarousel } from '@coreui/react';
import { CCarouselItem } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css';
import family from '../../assets/image/family.webp'
import wildlife from '../../assets/image/wildlife.webp'
import romantic from '../../assets/image/romantic.webp'




const Craousel2 = () => {
    return (
        <div>
            <CCarousel className='CCarousel' controls dark>
              
                <CCarouselItem>
                    <div className="a">
                        <div className="parent">
                            <img src={family} alt="" className="parent-img" />
                            <div className="child">
                                <div className="heading">
                                    <h4>Family</h4>
                                    <p>Explore incredible deal</p>
                                    <p>On family tour</p>
                                </div>
                                <p>Plan your next family adventure with us! Our travel site offers a wide range of family-friendly tours, from theme park vacations to beach getaways.</p>
                                <button className='craousel-btn' >Explore Vacations</button>
                            </div>
                        </div>
                    </div>
                </CCarouselItem>
                <CCarouselItem>
                    <div className="a">
                        <div className="parent">
                            <img src={wildlife} alt="" className="parent-img" />
                            <div className="child">
                                <div className="heading">
                                    <h4>Wildlife</h4>
                                    <p>Explore wide range</p>
                                    <p>of wildlife package</p>
                                </div>
                                <p>Get up close and personal with some of the world's most magnificent creatures on one of our wildlife tours. Our expert guides will lead you on an unforgettable journey, sharing their knowledge and insights along the way.</p>                           <button className='craousel-btn' >explore vacations</button>
                            </div>
                        </div>
                    </div>
                </CCarouselItem>
                <CCarouselItem>
                    <div className="a">
                        <div className="parent">
                            <img
                                src={romantic} alt="" className="parent-img" />
                            <div className="child">
                                <div className="heading">
                                    <h4>Romantic</h4>
                                    <p>Romantic gateway </p>
                                    <p>Around the world</p>
                                </div>
<p>Escape with your loved one on a romantic journey to some of the world's most enchanting destinations. Our travel site offers a range of romantic tours, from city breaks to beach getaways, designed to inspire passion and create unforgettable memories.</p>                                <button className='craousel-btn' >Explore Vacations</button>
                            </div>
                        </div>
                    </div>
                </CCarouselItem>
            </CCarousel>
        </div>
    )
}

export default Craousel2
