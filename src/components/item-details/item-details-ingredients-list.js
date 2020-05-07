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
      <ul className="DP-ul">
        {
          ingredients.map((ingredient) => {
            const id = `${ingredient} DP`;
            return <li className="DP-li" key={id}>{ingredient}</li>
          })
        }
      </ul>
    );
  } else {
    return(
      <ul className="DP-ul DP-ul-sets"> 
        {
          ingredients.map((ingredient) => {
            const clazz = (activeLi === ingredient.id) ? 'active-li' : '';
            const id = `${ingredient.id} ${ingredient.name} DP`;
            return <li key={id}
                    className={`DP-li DP-li-sets ${clazz}`}
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
        }
      </ul>
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
