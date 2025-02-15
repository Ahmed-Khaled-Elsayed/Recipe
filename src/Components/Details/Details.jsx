import React, { useEffect , useState } from 'react'
import style from './CSS/Details.module.css'
import axios from 'axios'
import Ingredients from '../Ingredients/Ingredients';
function Details() {
 
  
    const id = localStorage.getItem("mealId")

  const [meal , setMeal]=useState(null);
  const [ingredients , setIngredients]=useState(null);
  
  async function getDetails() {
    try {
      const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      
      setMeal(data)
       getIngredients()
    } catch (error) {
      console.error( error);
    }
  }

  function getIngredients()
  {
   let a = [];
   
   for(let i=1 ;i<=20;i++)
   {
    let x=`strIngredient${i}`
    let y=`strMeasure${i}`
    if(meal?.meals[0][x] != "")
     {
      let obj = {ingred:meal?.meals[0][x] , meas:meal?.meals[0][y]}
      a.push(obj)
     }
   }
   setIngredients(a);

    
  }

    useEffect(() => {
      getDetails();
      
      
    }, []);

      useEffect(() => {
    if(meal != null)
     getIngredients();
  }, [meal]);


  return (
  <><h1 className={style.mealName}>{meal?.meals[0].strMeal}</h1>
    <div className={style.details}>
      
      <div className={style.left}>
        
        <img src={meal?.meals[0].strMealThumb} alt="" className={style.image}/>
        <div>
          <a href={meal?.meals[0].strYoutube} target="_blank"><button className={style.btn1}><i className="fa-brands fa-youtube"></i>Youtube</button></a>
          <a href={meal?.meals[0].strSource} target="_blank"><button className={style.btn2}><i className="fa-solid fa-globe"></i>Source</button></a>
        </div>
        </div>
        <div className={style.middle}>
        <p>{meal?.meals[0].strInstructions}</p>
        </div>
      <div className={style.right}>
        <h3>Ingredients</h3>
        {ingredients?.map((x, idx) => (
          <Ingredients key={idx} ingredients={x} />
        ))}
        
      </div>
    </div>
    </>
  )
}

export default Details
