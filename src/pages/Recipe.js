import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Recipe = () => {
  const {mealId} = useParams();

  const [meal, setMeal] = useState();

  useEffect(() => {
    const loadMeal = async () => {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
      const response = await fetch(url);
      if(response.ok) {
        const data = await response.json();
        setMeal(data.meals[0]);
      }
      else {
        console.warn('bad stuffs', response);
      }
    };

    if(!meal) {
      loadMeal();
    }
  });

  if(!meal) {
    return <h4>Loading ...</h4>;
  }
  console.log(meal);

  const ingredients = [];

  for(var i = 1; i <= 20; i++) {
    if(meal[`strIngredient${i}`]) {
      ingredients.push({
        text: meal[`strIngredient${i}`],
        measure: meal[`strMeasure${i}`]
      });
    }
  }



  return (
    <div className="recipe">
      <h2>{meal.strMeal}</h2>
      <h4>{meal.strCategory} - {meal.strArea}</h4>
      <div className="topBar">
        <div className="ingredients">
          <h4>Ingredients</h4>
          {ingredients.map(ing => <p>{ing.measure} {ing.text}</p>)}
        </div>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
      </div>
      <h4>Instructions</h4>
      <div className="instructions">
        <ol>
      {meal.strInstructions.split('\n').filter(i => { return i.trim()}).map((line, index) => 
        <li>{line}</li>)}
        </ol>
      </div>
      
    </div>
  )
};

export default Recipe;
