import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineCloseSquare } from 'react-icons/ai'

import './style.css'
import { Link } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const Navbar = () => {

  const [clicked, setClicked] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [pagestate,setPageState] = useState('SignIn')
  const auth = getAuth()

  /* This is a React hook called `useEffect` that is used to perform side effects in functional
  components. In this case, it is used to add an event listener to the window object that listens
  for the `scroll` event. When the user scrolls, the `handleScroll` function is called, which
  checks the current scroll position and updates the state of `showNavbar` and `lastScrollY`
  accordingly. The `useEffect` hook is also passed a dependency array `[lastScrollY]`, which means
  that the effect will only be re-run if the value of `lastScrollY` changes. */
  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    }

    window.addEventListener('scroll', handleScroll);

  }, [lastScrollY]);


  
  const handleClick = () => {
    setClicked(!clicked)
  }



  useEffect(()=>
  {
    onAuthStateChanged(auth,(user)=>
    {
      if(user)
      {
     setPageState('Profile')
      }
      else
      {
        setPageState('SignIn')
      }
    })
  },[auth])


  

  return (
    <div className={`Navbar ${showNavbar ? '' : 'navbar--hidden'} ${clicked ? 'mobile-nav' : ''}`}>
      <div className='logo'>TripTrek</div>
      <div className={`${clicked ? 'nav active' : 'nav'}`}>
        <ul className='nav-items'>
          <Link to='/' className='link'>
            <li className='items'>Home</li>
          </Link>
          <Link to='/about' className='link'>
            <li className='items'>About</li>
          </Link>
          <Link to='/contact' className='link'>
            <li className='items'>Contact</li>
          </Link>
        </ul>
        <Link to={`/${pagestate}`}>
          <button className='sign-up'>{pagestate}</button>
        </Link>
      </div>

      <div className="mobile" onClick={handleClick}>
        {clicked ? (<AiOutlineCloseSquare className='close' />) : (<RxHamburgerMenu className='hamburger' />)}
      </div>
    </div>
  )
}

export default Navbar
