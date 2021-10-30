import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
      <div className='nav'>
          <div className='logo-home'>
          <span onClick={()=>{window.location.assign('/')}}>Logo</span>
          <span onClick={()=>{window.location.assign('/')}}>Home</span>
          </div>
          <div className='register'>
          <span onClick={()=>{window.location.assign('/register')}}>SignUp</span>
          <span onClick={()=>{window.location.assign('/log-in')}}>Login</span>
          </div>
          
      </div>
    </>
  )
}

export default Navbar
