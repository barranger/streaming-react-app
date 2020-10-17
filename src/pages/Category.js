import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css';

const Meal = () => {
  const {catId} = useParams();
  const [meals, setMeals] = useState();

  useEffect(() => {
    const loadMeals = async () => {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catId}`;
      const response = await fetch(url);
      if(response.ok) {
        const meals = await response.json();
        setMeals(meals.meals);
      }
      else {
        console.warn('bad stuffs', response);
      }
    };

    if(!meals) {
      loadMeals();
    }
  })

  if(!meals) {
    return <h4>Loading {catId}...</h4>;
  }
  console.log(meals)
 return (
   <>
   <h4>Recipes</h4>
   <div className="categories">
     {meals.map(meal => {
     return (
       (
        
        <div className="category">
          <Link to={`/Recipe/${meal.idMeal}`}  key={meal.idMeal}>
            <h4>{meal.strMeal}</h4>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMealDescription}</p>
          </Link>
        </div>
       )
     )
   })}
  </div>
  </>
 ) 
}

export default Meal;