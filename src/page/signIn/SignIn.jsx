import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import SignUpSvg from '../../assets/svg/signUp.svg'
import './style.css'
const SignIn = () => {


    const navigate = useNavigate()


    const [formData, SetFormData] = useState({
        email: "",
        password: "",
      });
      // here we destructur it to use seperately
      const { email, password } = formData;
        // Onchange is function that trigger when value og given inout is change and we use prevState to store the prevous entered data
      // here we us prestate as an variable who store all previous value thts why we use down spread operator 
      // this function is used to take value from user and store in for data by capturing the user input using id we provide below
      function onChange(e) {
        SetFormData((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }));
      }
    
    
      // firebase work
      async function onSubmit(e) {
        e.preventDefault();
        try {
          const auth = getAuth();
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          if (userCredential.user) {
            navigate("/");
          }
        } catch (error) {
          alert("Bad user credentials");
        }
      }
    
  

    return (
        <div className='SignInDiv' style={{ backgroundImage: `url(${SignUpSvg})`, height: '100vh', paddingTop: '5rem' }}>
            <div className="SignInform">
                <form onSubmit={onSubmit} >
                    <input type="email" placeholder='Email' name="" id="email" value={email} onChange={onChange
                    } required/>
                    <input type="text" placeholder='password' id='password' value={password} onChange={onChange
                    } required />

                    <div>
                        <button className="submitBtn" type='submit'>Sign-in</button>
                    </div>
                    <div className="signUp">
                     
                       <p>Don't have an account?</p>
                      <Link to='/SignUp'>
                      <p>sign-up</p>
                      </Link>
                      
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn
