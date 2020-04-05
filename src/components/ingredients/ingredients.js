import React from 'react';
import { showItemDetails } from '../../actions';
import { connect } from 'react-redux';

const Ingredients = ({ type, ingredients=[], onItemDetails }) => {

  if (type === 'rools') {
    return(
      ingredients.map((ingredient) => {
        return <li>{ingredient}</li>
      })
    );
  } else {
    return(
      ingredients.map((ingredient) => {
        const id = ingredient.id + 'S';
        return <li
            key={id}
            onClick={() => onItemDetails(ingredient)}>{ingredient.name}</li>
      })
    )
  }
};

const mapStateToProps = () => {
  return {}
};

const mapDispatchToProps = {
  onItemDetails: showItemDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);