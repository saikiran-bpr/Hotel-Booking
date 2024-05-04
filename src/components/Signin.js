import React, { useState } from 'react'

const SignIn = ({ setIsSignedIn, setIsModalOpen, setData, setCurrUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    const users = JSON.parse(localStorage.getItem('hotelusers')) || []
    const user = users.find(
      (user) => user.email === email && user.password === password
    )
    if (user) {
      setCurrUser(user.email);
      let favArr = user.favourites;
      // console.log(favArr);
      setData(prev => {
        return prev.map(it => {
          let id = favArr.find(ele => ele === it.id);
          if(id)
            it.favourite = false;
          return {...it};
        });
      });
      alert('Signin successful!')
      setIsSignedIn(true)
      setIsModalOpen(false)
    } else {
      alert('Invalid email or password!')
    }
  }
  return (
    <div className='signIn'>
      <h2>Sign In</h2>
      <div className='form'>
        <p>Enter your email :</p>
        <input
          className='form-inputs'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter email here'
        ></input>
        <p>Enter your password :</p>
        <input
          className='form-inputs'
          type='text'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter password here'
        ></input>
      </div>
      <button className='submit-btn' onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  )
}

export default SignIn
