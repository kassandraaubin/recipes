import React from 'react';
import style from './recipe.module.css';
const Recipe = ({image, title, calories, cuisineType, ingredients}) => {
    return(
        <div className={style.recipe}>
            <img src={image} alt="" />
            <h1>{title}</h1>
            <p>Cuisine Type: {cuisineType}</p>
            <p>Ingredients:</p>

            <ol>
                { ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                )) }
            </ol>
        </div>
    );
};
export default Recipe;