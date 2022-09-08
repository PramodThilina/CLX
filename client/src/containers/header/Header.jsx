import React from 'react'
import './header.css'
import  img1 from '../../assets/img1.png'

const Header = () => {
  return (
    <div className='clx__header' id='home'>
      <div className='clx__header-content'>
        <div className='clx__bigtext'>
         Cloud LearnX 
        </div>
        <h3 className='slogan'> A SMARTER WAY OF LEARNING ONLINE</h3>
        <h4 className='smalltxt'>Online via Zoom</h4>
        <div >
          <img src={img1} alt='img1' className='clx__img-img1 scale-up-center' />
        </div>
      </div>
    </div>
  )
}

export default Header