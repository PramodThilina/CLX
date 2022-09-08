import React from 'react'
import './navbar.css'
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { Button } from '../Button';


const Navbar = () => {


  return (
    <div className='navbar'>
      <div className="navbar-link">
        <Link to='/'><p>HOME</p></Link>
        <Link to='/about'><p>ABOUT</p></Link>
        <Link to='/contact'><p>CONTACT</p></Link>
        <Link to='/cta'><p>REGISTER</p></Link>
      </div>
        <Link to='/login' className='login' ><p>LOG IN</p></Link>
      </div>  
  )
}

export default Navbar