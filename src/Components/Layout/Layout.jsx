import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import style from './CSS/Layout.module.css'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <div className={style.my_lay}>

      <div className={style.left}>
        <Sidebar/>
      </div>
      
      <div className={style.right}>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
