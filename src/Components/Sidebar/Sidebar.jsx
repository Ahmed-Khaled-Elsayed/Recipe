import React, { useState } from 'react'
import style from './CSS/Sidebar.module.css'
import logo from './../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'

function Sidebar() {
 
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
     <button className={style.toggleButton} onClick={() => setIsOpen(!isOpen)}>
     <i className="fa-solid fa-bars"></i>
      </button>


    <div className={`${style.mybar} ${isOpen ? style.open : ''}`}>
      <div className={style.logo}>
        <img src={logo} alt="" className={style.logoimg} />
      </div>

      <div className={style.buttons}>

       <NavLink  to={"/"} className={style.btn + " " + style.active}><i className="fa-solid fa-utensils"></i> Meals</NavLink> 
        <NavLink  to={"/"} className={style.btn}><i className="fa-solid fa-utensils"></i> Ingredients</NavLink>
        <NavLink to={"/"} className={style.btn}><i className="fa-solid fa-utensils"></i> Area</NavLink>

      </div>
    </div></>
  )
}

export default Sidebar
