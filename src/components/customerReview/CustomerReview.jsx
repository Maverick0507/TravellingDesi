import './style.css'
import { AiTwotoneStar } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { collection, getDocs } from 'firebase/firestore'


const CustomerReview = () => {

    return (
        <div className='review'>
            <h3>Customer Reviews</h3>
            <p>Read testimonials from our happy customers</p>

            <div className="R-card">
                <div className="review-card">
                    <div className="customer-data">
                        <div className="customer-img">
                            <BsFillPersonFill className='customer' />
                        </div>
                        <div className="customer-name">
                            <p>Ayush</p>
                            <p>Student</p>
                            <p>
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                            </p>
                        </div>
                    </div>
                    <div className="customer-review">
                        The designed tour is so amazing.
                    </div>
                </div>

                <div className="review-card">
                    <div className="customer-data">
                        <div className="customer-img">
                            <BsFillPersonFill className='customer' />
                        </div>
                        <div className="customer-name">
                            <p>Astha</p>
                            <p>Developer</p>
                            <p>
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                            </p>
                        </div>
                    </div>
                    <div className="customer-review">
                        Amazing Creation.
                    </div>
                </div>

                <div className="review-card">
                    <div className="customer-data">
                        <div className="customer-img">
                            <BsFillPersonFill className='customer' />
                        </div>
                        <div className="customer-name">
                            <p>Kinshuk</p>
                            <p>Doctor</p>
                            <p>
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                            </p>
                        </div>
                    </div>
                    <div className="customer-review">
                        Great.
                    </div>
                </div>

                <div className="review-card">
                    <div className="customer-data">
                        <div className="customer-img">
                            <BsFillPersonFill className='customer' />
                        </div>
                        <div className="customer-name">
                            <p>Prashant</p>
                            <p>Student</p>
                            <p>
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                                <AiTwotoneStar className='star' />
                            </p>
                        </div>
                    </div>
                    <div className="customer-review">
                        The designed tour is so amazing
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CustomerReview
