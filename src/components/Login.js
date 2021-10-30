import { Users } from '../User';
import './Login.css'
import React from 'react';
import { useState,useEffect } from 'react/cjs/react.development';

function Login() {
    const [username,setUsername]=useState('')
    const[pwd,setpwd]=useState('')
    const[validUser,setValidUser]=useState(0)    
    const adUser= new Users('Abhishek Upadhyay','abhishekaec1563@gmail.com','valid@123')

    const setUser=(e)=>{
        setUsername(e.target.value)
    }
    

    const validateUser=(e)=>{
        e.preventDefault();
        e.target.reset();
        console.log(adUser.name);
        console.log(adUser.password)
        adUser.name===username & adUser.password===pwd?setValidUser(1):setValidUser(2)
       
    }
   

    useEffect(() => {
        
         validUser===2?window.alert('Username or password is wrong'):<></>
        setValidUser(0)
       
    }, [validUser])
   

  return (
    <>
      {validUser===1?window.location.assign('/'): 
      <form className='login-form' onSubmit={validateUser} >
      <h1 className='login-txt'>Login here</h1>
      <div className="container">
          <div className='sm-container'>
          <div className='user'>
            <label htmlFor="uname"><b>Username</b></label>
            <input  className='input' type="text" placeholder="Enter Username" name="uname" required onChange={setUser}/>
          </div>
          <div className='password'>
            <label htmlFor="psw"><b>Password</b></label>
            <input className='input' type="password" placeholder="Enter Password" name="psw" required onChange={(e)=>{setpwd(e.target.value)}}/>
          </div> 
          <div className='btn'><button className='btn-smt' type="submit">Login</button></div>
            
         </div>   
        </div>
      </form>
}
    </>
  )
}

export default Login
