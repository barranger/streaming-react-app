import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    const loadCategories = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      if(response.ok) {
        const cats = await response.json();
        setCategories(cats.categories);
      }
    };

    if(!categories) {
      loadCategories();
    }
  })

  if(!categories) {
    return <h4>Loading...</h4>;
  }

  console.log(categories);

  return (
    <div className="App">
        {categories.map( cat => { return (
          <Link to={`/Category/${cat.strCategory}`}  key={cat.idCategory}>
            <div>
              <h4>{cat.strCategory}</h4>
              <img src={cat.strCategoryThumb} alt={cat.strCategory} />
              <p>{cat.strCategoryDescription}</p>
            </div>
          </Link>
        );
        })}
    </div>
  );
};

export default Home;