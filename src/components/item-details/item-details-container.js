import React, { Component, Fragment } from 'react';
import ItemDetails from './item-details';
import Spinner from '../spinner';
import { withRouter } from 'react-router-dom';
import { onInitialPosition } from '../utils';

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

    const { openPopUpIngredientDetails, showDeatailsModal, hideDetailsModal } = this.props;

    if (ingredients === undefined) {
      return
    };

    if (type === 'rools') {
      return(
        ingredients.map((ingredient) => {
          const id = `${ingredient} DP`;
          return <li key={id}>{ingredient}</li>
        })
      );
    } else {
      return(
        ingredients.map((ingredient) => {
          const id = `${ingredient.id} ${ingredient.name} DP`;
          return <li key={id}
                  className="DP-sets-li"
                  onClick={() => openPopUpIngredientDetails(ingredient)}
                  onMouseOver={() => showDeatailsModal(ingredient)}
                  onMouseOut={hideDetailsModal}
                  onMouseMove={onInitialPosition}
                 >
                  {ingredient.name}
                 </li>
        })
      );
    }
  };

  closeDetailsPage = ({ type }) => {
    const { history, closeItemDetails, closePopUpIngredientDetails } = this.props;
    history.push(`/${type}/`)
    closeItemDetails()
    closePopUpIngredientDetails();
  };

  render() {
    const { item, onAddedToCart, loading } = this.props;
    if (loading) {
      return <Spinner />
    }
    return(
      <Fragment>
        <ItemDetails
          item={item}
          onAddedToCart={onAddedToCart}
          ingredientslist={this.ingredientsList(item)}
          closeDetailsPage={() => this.closeDetailsPage(item)} />
      </Fragment>
    );
  }
};

export default  withRouter(ItemDeatailsContainer);
