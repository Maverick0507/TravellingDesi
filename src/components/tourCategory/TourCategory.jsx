import React from 'react'
import './style.css'
import image2 from '../../assets/image/romaticTour.webp'
import image3 from '../../assets/image/beachesTour.webp'
import image4 from '../../assets/image/mountainTour.webp'
import { Link } from 'react-router-dom'


const TourCategory = () => {
    return (
        <div className='tourCategory'>
            <div className="tourCategory-heading">
                <h3>CHOOSE THE PERFECT TRIP WITH</h3>
                <h3>YOUR INCREDIBLE INTERESTS</h3>
            </div>
            <div className="tourCategory-cards">
                <div className="tourCategory-card">
                    <div className="cardimg">
                        <img className='tourCategory-card-img' src="https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                    </div>
                    <div className="tourCategory-card-data">
                        <p>Discover forest</p>

                        <Link to='/UTTRAKHAND/3'>
                            <button>Explore all tours</button>
                        </Link>
                    </div>
                </div>

                <div className="tourCategory-card">
                    <div className="cardimg">
                        <img className='tourCategory-card-img' src={image2} alt="romantic" />
                    </div>
                    <div className="tourCategory-card-data">
                        <p>Romantic gateway</p>

                        <Link to='/UTTRAKHAND/NANITAL'>
                            <button>Explore all tours</button>
                        </Link>
                    </div>
                </div>

                <div className="tourCategory-card">
                    <div className="cardimg">
                        <img className='tourCategory-card-img' src={image3} alt="beaches" />
                    </div>
                    <div className="tourCategory-card-data">
                        <p>Unexplored beaches</p>
                        <Link to="/GOA/GOA2">
                            <button>Explore all tours</button>
                        </Link>


                    </div>
                </div>

                <div className="tourCategory-card">
                    <div className="cardimg">  <img className='tourCategory-card-img' src={image4} alt="mountains" /></div>
                    <div className="tourCategory-card-data">
                        <p>Mountains forest</p>
                        <Link to="/HIMACHALPARDESH/ROHTANG">
                            <button>Explore all tours</button>
                        </Link>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default TourCategory
