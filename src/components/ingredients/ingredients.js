import React from 'react';

const Ingredients = ({ type, ingredients, pref }) => {

  if (type === 'rools') {
    return(
      ingredients.map((ingredient) => {
        const id = `${ingredient} ${pref}`;
        return <li key={id} >{ingredient}</li>
      })
    );
  } else {
    return(
      ingredients.map((ingredient) => {
        const id = `${ingredient.id} ${ingredient.name} ${pref}`;
        return <li key={id} >{ingredient.name}</li>
      })
    )
  }
};

export default Ingredients;
