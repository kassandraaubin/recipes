import { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

function App(){

  const APP_ID = "e1f4c64c";
  const APP_KEY = "fbf183463b94e09224ab4cedb6872f98";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);

  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button 
          className="search-button"
          type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        { recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            cuisineType={recipe.recipe.cuisineType} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}

      </div>
    </div>
  );
};

export default App;
