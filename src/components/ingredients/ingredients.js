import React from 'react';

const Ingredients = ({ type, ingredients=[] }) => {

  if (type === 'rools') {
    return(
      ingredients.map((ingredient) => {
        const id = `${ingredient.id} + ${ingredient}`;
        return <li key={id} >{ingredient}</li>
      })
    );
  } else {
    return(
      ingredients.map((ingredient) => {
        const id = `${ingredient.id} + ${ingredient.ingredient}`;
        return <li key={id} >{ingredient.name}</li>
      })
    )
  }
};

export default Ingredients;