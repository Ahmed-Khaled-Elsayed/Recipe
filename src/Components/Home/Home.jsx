import React, { useEffect, useState } from 'react'
import Categories from '../Categories/Categories'
import axios from 'axios'
import style from './CSS/Home.module.css'
import MealCard from '../MealCard/MealCard';

function Home() {
  const [cats, setCats] = useState(null);
  const [meals, setMeals] = useState(null);


  async function getCat() {
    try {
      const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
      setCats(data.categories); 
    } catch (error) {
      console.error(error);
    }
  }

  async function getMeal(cat="") {
    try {
      if(cat != "" && cat !="All")
      {
        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);
        setMeals(data.meals); 
      }
      else{
        const {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
        setMeals(data.meals); 
      }
      
    } catch (error) {
      console.error(error);
    }
  }

  function clickCat( x)
  {
   getMeal(x)
  }

  useEffect(() => {
    getCat();
    getMeal();
  }, []); 

  // useEffect(() => {
  //   if(meals != null)
  //    console.log(meals); 
  // }, [cats]);


  return (
    <div className={style.home}>
      <h1>Cooking well, with love, is an art.</h1>

      <div className={style.categories_container}> 
        <Categories cat={{"strCategory":"All"}} click={clickCat}/>
        {cats?.map((x, idx) => (
          <Categories cat={x} click={clickCat} key={idx} />
        ))}
      </div>

      <div className={style.meals_container}>
        
        {meals?.map((x, idx) => (
          <MealCard meal={x}  key={idx} />
        ))}
      </div>

    </div>
  )
}

export default Home
