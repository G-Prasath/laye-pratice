import React from 'react'
import {img_1, img_2, img_3, img_4} from '/public'

const Navbar = () => {
  return (
    <div>
      Navbar
      <img 
      loading='lazy'
      role='presentation'
      alt="face-auth"
      srcSet={`
      ${img_1}?w=100 100w,
      ${img_1}?w=200 200w,
      ${img_1}?w=400 400w,
      ${img_1}?w=800 800w,      
      `}
      src={img_1} 
      
      
      />
      {/* <img src={img_2} alt="face-auth" />
      <img src={img_3} alt="face-auth" />
      <img src={img_4} alt="face-auth" /> */}


    </div>
  )
}

export default Navbar