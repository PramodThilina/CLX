import React from 'react'
import './brand.css'
import  img2 from '../../assets/img2.png'
import  img3 from '../../assets/img3.png'
import  img4 from '../../assets/img4.png'


const Brand = () => {
  return (
  <div className='clx__brand' id='about'>
    <div className='clx__brand-content'>
      <div className='texts'>
      <div className='title'>
        <h1>Who are we</h1>
      </div>
      <div className='description'>
        <p>
        Cloud LearnX is an online learning platform designed to promote independent learning, student-centered teaching, and reasoning skills in students.<br/>
        We cover London, and Sri Lanka syllabi
        </p>
      </div>
      </div>
      <div className='clx'>

      </div>
        <img src={img2} alt="img2" className='img2'/>
        <img src={img3}  alt="img3" className='img3'/>
        <img src={img4}  alt="img4" className='img4'/>
    </div>
  </div>
    
  )
}

export default Brand