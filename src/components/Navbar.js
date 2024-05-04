import React from 'react'
import { hotelData } from '../utils/hotelData'

const Navbar = ({ setIsModalOpen, isSignedIn, setIsSignedIn, setPage, setData, data, currUser }) => {
  return (
    <div className='navbar'>
      <div className='logo'>HotelView</div>
      <div className='filler'></div>
      <div className='navbar-options'>
        {isSignedIn && (
          <button className='nav-button' onClick={() => {
            let favArr = [];
            data.forEach(it => {
              if(!it.favourite) favArr.push(it.id);
            });
            let prevData = JSON.parse(localStorage.getItem("hotelusers"));
            let newData = prevData.map(it => {
              if(it.email === currUser){
                it.favourites = favArr;
              }
              return {...it};
            });
            localStorage.setItem("hotelusers", JSON.stringify(newData));
            setData(hotelData.map(it => {
              return {
                ...it,
                favourite : true
              }
            }));
            setIsSignedIn(false)
          }}>
            Sign Out
          </button>
        )}
        {!isSignedIn && (
          <button
            className='nav-button'
            onClick={() => {
              setIsModalOpen(true)
            }}
          >
            Sign Up / Sign In
          </button>
        )}

        <button className='nav-button' onClick={() => setPage('favourite')}>
          Favourites
        </button>
        <button className='nav-button' onClick={() => setPage('main')}>
          Main Page
        </button>
      </div>
    </div>
  )
}

export default Navbar
