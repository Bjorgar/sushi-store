import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openPopUpIngredientDetails, showDeatailsModal, hideDetailsModal } from '../../actions';
import { onInitialPosition } from '../utils';
import { setActiveLi } from '../../actions';

class ItemDetailsIngredientsList extends Component {

  render() {

  const {
    item,
    openPopUpIngredientDetails,
    showDeatailsModal,
    hideDetailsModal,
    setActiveLi,
    activeLi } = this.props;

  const { type, ingredients } = item;

  if (ingredients === undefined) {
    return
  };

  if (type !== 'sets') {
    return(
      ingredients.map((ingredient) => {
        const id = `${ingredient} DP`;
        return <li key={id}>{ingredient}</li>
      })
    );
  } else {
    return(
      ingredients.map((ingredient) => {
        const clazz = (activeLi === ingredient.id) ? 'active-li' : '';
        const id = `${ingredient.id} ${ingredient.name} DP`;
        return <li key={id}
                className={`DP-sets-li ${clazz}`}
                onClick={() => {
                  setActiveLi(ingredient.id);
                  openPopUpIngredientDetails(ingredient)}}
                onMouseOver={() => showDeatailsModal(ingredient)}
                onMouseOut={hideDetailsModal}
                onMouseMove={onInitialPosition}
               >
                {ingredient.name}
               </li>
      })
    );
  }
  }
};

const mapStateToProps = ({ itemDetails: { activeLi } }) => ({ activeLi })

const mapDispatchToProps = {
  openPopUpIngredientDetails,
  showDeatailsModal,
  hideDetailsModal,
  setActiveLi
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetailsIngredientsList);
