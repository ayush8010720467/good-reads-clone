import React from 'react'
import { useState,useEffect } from 'react/cjs/react.development';
import { Users } from '../User';
import './Signup.css'
let users=[]
let user;
function Signup() {
  const[fname,setFname]=useState('');
  const[lname,setLname]=useState('');
  const[email,setEmail]=useState('');
  const[pwd,setPwd]=useState('');
  const[repwd,setRepwd]=useState('');
  const[pwdmatch,setPwdMatch]=useState(0)
  const[newUser,setNewUser]=useState([])
  
  const handleForm=()=>{
    pwd===repwd?setPwdMatch(1):setPwdMatch(-1);
  }
  const createNewUser=()=>{
    user= new Users(fname+' '+lname,email,pwd);
    console.log(user)
   // users.push(user);
    //setNewUser(users);
  }
  useEffect(() => {
    
    pwdmatch=== 1? createNewUser():pwdmatch=== -1?window.alert('Password  and confirm password did not match'):<></>;
  }, [pwdmatch])
  return (
    
    <div className='Signup-form' onSubmit={handleForm}>
      <h1>Register your self</h1>
      
      <form className='signUp'>
        <label htmlFor='fname'><b>Firstname</b></label>
        <input type='text' placeholder='Enter First Name' name='fname' className='fname inp' onChange={(e)=>{setFname(e.target.value)}}/><br/>
        <label htmlFor='lname'><b>Lastname</b></label>
        <input type='text' placeholder='Enter Last Name' name='lname' className='lname inp' onChange={(e)=>{setLname(e.target.value)}}/><br/>
        <label htmlFor='email'><b>Email</b></label>
        <input type='email' placeholder='Enter Email' name='email' className='email inp'  onChange={(e)=>{setEmail(e.target.value)}}/><br/>
        <label htmlFor='password'><b>Enter Password</b></label>
        <input type='password' placeholder='Enter Password' name='password' className='pwd inp' onChange={(e)=>{setPwd(e.target.value)}}/><br/>
        <label htmlFor='re-password'><b>Confirm Password</b></label>
        <input type='password' placeholder=' Re-enter Password' name='re-password' className='pwd inp' onChange={(e)=>{setRepwd(e.target.value)}}/><br/>
        <button className='smt'>Submit</button>
      </form>
      <p>Already a User please click here to <a href='/log-in' className='log'>login</a></p>
    </div>
  )
}

export default Signup
