import React, { Component } from 'react';
import ItemDetails from './item-details';
import Spinner from '../spinner';
import { withRouter } from 'react-router-dom';

class ItemDeatailsContainer extends Component {

  extractItem = (data) => {
    const { itemId, showItemDetails } = this.props;

    const item = data.find((item) => item.id === itemId);
    showItemDetails(item);
  };
  
  componentDidMount() {
    const { getData, catchError } = this.props;

    getData()
      .then((data) => this.extractItem(data))
      .catch((err) => catchError(err));
  }

  ingredientsList = ({type, ingredients}) => {

    if (ingredients === undefined) {
      return
    };

    if (type === 'rools') {
      return(
        ingredients.map((ingredient) => {
          const id = `${ingredient.id} + ${ingredient} + DP`;
          return <li key={id}>{ingredient}</li>
        })
      );
    } else {
      return(
        ingredients.map((ingredient) => {
          const id = `${ingredient.id} + ${ingredient.ingredient} + DP`;
          return <li key={id}>
                  <span>
                    {ingredient.name}
                  </span>
                  <span>
                    <i class="far fa-caret-square-up"></i>
                  </span>
                  </li>
        })
      );
    }
  };

  closePopUpWindow = ({ type }) => {
    const { history, closeItemDetails } = this.props;
    history.push(`/${type}/`)
    closeItemDetails()
  };

  render() {
    const { item, onAddedToCart, loading } = this.props;
    if (loading) {
      return <Spinner />
    }
    return(
      <ItemDetails
        item={item}
        onAddedToCart={onAddedToCart}
        ingredientslist={this.ingredientsList(item)}
        closePopUpWindow={() => this.closePopUpWindow(item)} />
    );
  }
};

export default  withRouter(ItemDeatailsContainer);
