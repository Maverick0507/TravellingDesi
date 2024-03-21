import React, { useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import {FcGoogle} from 'react-icons/fc'
import SignUpSvg from '../../assets/svg/signUp.svg';
import './style.css';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const { name, phoneNumber, email, password } = formData;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      const user = userCredential.user;
      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, 'users', user.uid), formDataCopy);
      alert('Sign-up successful!');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    }
  };


  async function handleGoogleAuth()
  {
    try {
       const auth = getAuth()
       const provider = new GoogleAuthProvider()
       const result = await signInWithPopup(auth,provider)
       const user = result.user
       const userDetails = 
       {
        name:user.displayName,
        email:user.email
       }
       await setDoc(doc(db, 'users', user.uid), userDetails);
       alert('Sign-up successful!');
       navigate('/');
    } catch (error) {
      
    }
  }

  return (
    <div className="SignUpDiv" style={{ backgroundImage: `url(${SignUpSvg})`, height: '100vh', paddingTop: '5rem' }}>
      <div className="SignUpform">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="User name" id="name" value={name} onChange={handleChange} />
          <input type="tel" placeholder="Phone" id="phoneNumber" value={phoneNumber} onChange={handleChange} />
          <input type="email" placeholder="Email" id="email" value={email} onChange={handleChange} />
          <input type="password" placeholder="Password" id="password" value={password} onChange={handleChange} />

          <div className='formBtn'>
            <button className="submitBtn" type="submit">
              Sign Up
            </button>
            <button  className="submitBtn" onClick={handleGoogleAuth}>
              Sign Up with Google <span className='google'><FcGoogle/></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
