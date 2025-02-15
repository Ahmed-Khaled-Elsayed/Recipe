import React from 'react'
import style from './CSS/Categories.module.css'

function Categories( {cat , click}) {



  return (
    <div>
      
      <div  className={style.my_cat} onClick={()=>{click(cat.strCategory)}}>
        <span className={style.cat_box}>{cat.strCategory}</span>
      </div>
    </div>
  )
}

export default Categories
