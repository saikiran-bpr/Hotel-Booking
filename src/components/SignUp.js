import React, { useState } from 'react'

const SignUp = ({ setActiveTab }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    const users = JSON.parse(localStorage.getItem('hotelusers')) || []
    const exists = users.some((user) => user.email === email)

    if (exists) {
      alert('User with this email already exists!')
      return
    }
    let favourites = [];
    const newUser = { name, email, password, favourites }
    users.push(newUser)
    localStorage.setItem('hotelusers', JSON.stringify(users))

    setActiveTab('SignIn')
    setEmail('')
    setPassword('')
    setName('')
  }

  return (
    <div className='signUp'>
      <h2>Sign Up</h2>
      <div className='form'>
        <p>Enter your name :</p>
        <input
          className='form-inputs'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter name here'
        ></input>
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
      <button className='submit-btn' onClick={handleSignUp}>
        Sign Up
      </button>
    </div>
  )
}

export default SignUp
