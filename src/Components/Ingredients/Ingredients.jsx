import React from 'react'
import style from './CSS/Ingredients.module.css'
function Ingredients({ingredients}) {
    
    
  return (
   <>
   <div >
   
    <div className={style.item}>
        <div className={style.ingred}>
            <span>{ingredients?.ingred}:</span>
        </div>
        <div className={style.measure}>
            <span>{ingredients?.meas}</span>
        </div>
    </div>
   </div>
   </>
  )
}

export default Ingredients
