import './styles/App.css'
import Navbar from './components/Navbar'
import React, { useState } from 'react'
import Modal from './components/Modal'
import Main from './components/Main'
import Favourite from './components/Favourite'
import { hotelData } from './utils/hotelData'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('SignUp')
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [page, setPage] = useState('main')
  const [currUser, setCurrUser] = useState("");
  const [data, setData] = useState(hotelData.map(it => {
    return {
      ...it,
      favourite : true
    }
  }));
  const setterFn = (id) => {
    setData(prev => {
      return prev.map(it => {
        if(it.id === id){
          it.favourite = !it.favourite;
        }
        return {...it};
      });
    });
  }
  return (
    <div>
      <Navbar
        isSignedIn={isSignedIn}
        setIsSignedIn={setIsSignedIn}
        setIsModalOpen={setIsModalOpen}
        setPage={setPage}
        setData={setData}
        data={data}
        currUser={currUser}
      />
      {isModalOpen && (
        <Modal
          isSignedIn={isSignedIn}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsSignedIn={setIsSignedIn}
          setIsModalOpen={setIsModalOpen}
          setData={setData}
          setCurrUser={setCurrUser}
        />
      )}
      <div className='page'>
        {isSignedIn ? (
          page === 'main' ? (
            <Main data={data} setterFn={setterFn}/>
          ) : (
            <Favourite data={data} setterFn={setterFn}/>
          )
        ) : (
          <p>Please Sign in first</p>
        )}
      </div>
    </div>
  )
}

export default App
