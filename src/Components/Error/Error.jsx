import React from 'react'
import notfound from "./../../assets/notfound3.png"
import style from './CSS/Error.module.css'

function Error() {
  return (
    <div className='text-center'>
        {/* <p className={style.head}>NOT FOUND</p> */}
      <img src={notfound} alt="" className={style.image}/>
    </div>
  )
}

export default Error
