import React, { useEffect, useState } from 'react';
import './style.css';
import { db } from '../../firebase';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import Spinner from '../../components/spinner/Spinner';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import Calendar from 'react-calendar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import 'reactjs-popup/dist/index.css';
import { CButton, CModal, CModalBody, CModalHeader } from '@coreui/react';

const PackageDetails = () => {
  const params = useParams();
  const { state, city } = params;
  const navigate = useNavigate();

  // Define a state variable for the data
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleLeft = () => {
    if (currentIndex !== 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      setCurrentIndex(2);
    }
  };

  const handleRight = () => {
    if (currentIndex !== 2) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, state, city);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log('No such document!');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchData();
  }, [state, city]);

  const [value, onChange] = useState(new Date());
  const auth = getAuth();

   // Assuming that `value` is a Date object or a string that can be parsed into a Date
const date = new Date(value).toDateString(); // Convert to a human-readable date string
const trimmedDate = date.slice(4); // Remove the first four characters (e.g., "Mon ")
console.log(trimmedDate); // Output the trimmed date string

  const [bookingData, setBookingData] = useState({
    destination: '',
    duration: '',
    date: '',
    price: '',
    starting_date: '',
    image:''
  });

  async function onClick() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const updatedBookingData = {
          destination: data?.Destination || '',
          duration: data?.Duration || '',
          starting_date: trimmedDate || 'N/A',
          price: data.Price || '',
          name: user.displayName,
          email: user.email,
          phone: user.phoneNumber || '',
          image: data.Image || ''

        };
        setBookingData(updatedBookingData);
        await setDoc(doc(db, 'Bookings', user.uid), updatedBookingData);
        setVisible(true);
      } else {
        navigate('/SignIn');
        alert('Please login to book');
      }
    });
  }



  return (
    <div id='mainDiv'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1>Welcome to {data?.Destination}</h1>
          <h3>Your journey Your story</h3>

          <div id='cardWrapper'>
            <div id='cardCraousel'>
              <img src={data?.Craousel[currentIndex]} alt='' />
              <div className='Cbtn'>
                <div onClick={handleLeft} className='CLicon'>
                  <div className='left'>
                    <AiFillLeftCircle />
                  </div>
                </div>
                <div onClick={handleRight} className='CRicon'>
                  <div className='right'>
                    <AiFillRightCircle />
                  </div>
                </div>
              </div>
            </div>

            <div id='cardData'>
              <p>Tour Destination -- {data?.Destination}</p>
              <p>Duration -- {data?.Duration}</p>
              <p>Price -- {data?.Price}</p>

              <div className='calendar'>
                <p style={{ fontSize: '1rem', paddingTop: '0.5rem' }}>
                  Choose your starting date
                </p>
                <Calendar onChange={onChange} value={value} />
              </div>
            </div>
          </div>

          <div className='book'>
            <div className='CBtn'>
              <CButton onClick={onClick}>Book now</CButton>
              <CModal alignment='center' visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader>Thank you for booking</CModalHeader>
                <CModalBody>
                  <p>Our executive will contact you for more details</p>
                </CModalBody>
              </CModal>
            </div>
            <p>For an amazing journey 🧡</p>
          </div>
        </>
      )}
    </div>
  );
};

export default PackageDetails;
