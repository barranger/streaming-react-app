import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const Category = () => {
  const {catId} = useParams();
  const [meals, setMeals] = useState();

  useEffect(() => {
    const loadMeals = async () => {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catId}`;
      const response = await fetch(url);
      if(response.ok) {
        const cats = await response.json();
        setMeals(cats.meals);
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
   <div className="App">
     {meals.map(meal => {
     return (
       (
         <div key={meal.idMeal}>
          <h4>{meal.strMeal}</h4>
         </div>
       )
     )
   })}
  </div>
 ) 
}

export default Category;