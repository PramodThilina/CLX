import React from 'react';
import './login.css';
import Axios from 'axios';
import img6 from '../../assets/img6.png';
import { useState } from 'react';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPswd] = useState("");
  

  const submit = () =>{
    Axios.post('http://localhost:3001/login', {
      email_address: email,
      password: password,
    }).then((response)=> {
      console.log(response);
    })
  };

  return (
    <div className='clx__login' id='login'>
      <div className="clx__login-content"></div>
      <div className='box2'>
          <img src={img6} alt="img6.png" className='img6' />

        </div>
        <div className='box1'>
          <div  className='login-txt'><h1>LOG IN</h1></div>
          
          <form className='login-form'>
            <input 
            type="email" 
            placeholder='Email'
            onChange={(e) => {setEmail(e.target.value);}}
            autoComplete="off"
            value={email}  
            required
            />

            <input 
            type="password" 
            placeholder='Password'
            onChange={(e) => {setPswd(e.target.value);}}
            value={password}  
            required
            />
            <button className='btn' type='submit' onClick={submit}>Log In</button>
          </form>
        </div>


    </div>
  )
}

export default Login