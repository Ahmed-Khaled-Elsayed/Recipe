import React from 'react'
import image from './../../assets/images/logo.png'
import style from './CSS/Footer.module.css'
function Footer() {
  return (
    <div className={style.foot}>
      <img src={image} alt="" className={style.image}/>
      <p>© Ahmed Khaled | 2025</p>
    </div>
  )
}

export default Footer
