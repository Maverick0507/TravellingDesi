import React, { useState } from 'react';
import './Contact.css';
import { db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';

const Contact = () => {
    const [queryData, setQueryData] = useState({
        name: '',
        email: '',
        textArea: ''
    });

    const { name, email, textArea } = queryData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQueryData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await setDoc(doc(db, 'userQueries', email), queryData);
            // Assuming 'email' is a unique identifier, you might want to use it as the document ID
            // and store the queries in a collection named 'userQueries'
            alert('Query submitted successfully');
            setQueryData({
                name: '',
                email: '',
                textArea: ''
            });
        } catch (error) {
            console.error('Error submitting query:', error);
        }
    };

    return (
        <div className='Contact'>
            <div className="left">
                <h1>We'd love to hear from you</h1>
                <p>Whether you’re curious about Travel press—we’re ready to answer any and all questions.</p>
               <img className='Form-img' src="https://images.pexels.com/photos/17647332/pexels-photo-17647332/free-photo-of-acrobatic-airplane-in-sky.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className="Form">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Name'
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        placeholder='Email'
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                    <textarea
                        placeholder='Enter your query'
                        name="textArea"
                        value={textArea}
                        onChange={handleChange}
                        cols="30"
                        rows="4"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
