import React from "react";
import style from "./CSS/MealCard.module.css";
import { useNavigate } from "react-router-dom";


function MealCard({ meal }) {

  const navigate = useNavigate();

  function showRecipe() {
    // console.log(meal.idMeal);
    localStorage.setItem("mealId", meal.idMeal);
    navigate("/details");
  }

  
  return (
    <div className={style.card}>
      <img src={meal.strMealThumb} alt="" className={style.image} />
      <h1>{meal.strMeal.split(" ").splice(0, 2).join(" ")}</h1>
      <div className={style.country}>
        <i className="fa-solid fa-earth-americas"></i> {meal.strArea}
      </div>
      <div className={style.recipe}>
        <button className={style.btn} onClick={showRecipe}>
          View Recipe
        </button>
      </div>
    </div>
  );
}

export default MealCard;
