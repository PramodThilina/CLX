import React from 'react'
import {useState} from 'react';
import Axios from 'axios'
import './cta.css';




const CTA = () => {

  const[fullnameReg, setFullnameReg] = useState("");
  const[gradeReg, setGradeReg] = useState("");
  const[syllabiReg, setSyllabiReg] = useState("");
  const[birthdateReg, setBirthdateReg] = useState("");
  const[emailReg, setEmailReg] = useState("");
  const[passwordReg, setPasswordReg] = useState("");

  const register = () =>{
    Axios.post('https://localhost3000',{
      f_name: fullnameReg,
      grade:gradeReg,
      syllabus:syllabiReg,
      dob:birthdateReg,
      email_address:emailReg,
      password:passwordReg,
    }).then((response) =>{
      console.log(response);
    });
  };


  return (
    <div className='clx__cta' id='cta'>
        <div className='clx__cta-content'>
         <img src="https://media-public.canva.com/gznTk/MAED4ygznTk/1/tl.png" alt="img5.png" className='img5' />
         <div className="clx__form">
         <form className='form'>
         <div><input type="text" placeholder='Full Name' onChange={(e)=>{setFullnameReg(e.target.value);}} required/></div>
         <div>
          <select id="nationality" name='nationality' onChange={(e)=>{setSyllabiReg(e.target.value);}} required>
            <option hidden disabled selected value> -- I'm a | an -- </option>
            <option value="local">Sri Lankan (Local) Student</option>
            <option value="international">International Student</option>
          </select>
         </div>
         <div><input type="number" min="6" max="11" placeholder='Grade' onChange={(e)=>{setGradeReg(e.target.value);}} required/></div>
         <div>
          <select id="syllabi" name='syllabus' placeholder='Choose your syllabus' onChange={(e)=>{setSyllabiReg(e.target.value);}} required>
          <option hidden disabled selected value> -- Choose your syllabus -- </option>
            <option value="SL">Sri Lankan</option>
            <option value="LDN">London</option>
          </select>
         </div>
         <div><input type="date" placeholder='Date of Birth' onChange={(e)=>{setBirthdateReg(e.target.value);}} required/></div>
         <div><input type="email" placeholder='Email Address' onChange={(e)=>{setEmailReg(e.target.value);}}required/></div>
         <div><input type="password" placeholder='Password' onChange={(e)=>{setPasswordReg(e.target.value);}} required/></div>
         <div><input type="password" placeholder='Comfirm Password' required/></div>
          <button className='btn' type='submit' onClick={register}>Register</button>
         </form>
         </div>
        </div>
    </div>
  )
}

export default CTA