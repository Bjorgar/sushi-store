import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withSushistoreService } from '../hoc';
import {
  itemsLoaded,
  catchError,
  itemAddedToCart,
  itemsRequested,
  showItemDetails,
  closeItemDetails,
  openPopUpIngredientDetails,
  showDeatailsModal,
  hideDetailsModal } from '../../actions';
import { compose } from '../utils';
import ItemsListContainer from '../items-list';
import ItemDeatailsContainer from '../item-details';


const mapRoolsMethodToProps = (sushistoreService) => ({
  getData: sushistoreService.getRools
});

const mapSetsMethodToProps = (sushistoreService) => ({
  getData: sushistoreService.getSets
});

// CONNECT REDUX

const mapItemsStateToProps = ({ itemsList: { items, loading, hasError }, displaySettings: { quantity, order } }) => {
  return {
    items,
    loading,
    hasError,
    quantity,
    order
  };
};

const mapItemsDispatchToProps = (dispatch) => bindActionCreators({
  onAddedToCart: itemAddedToCart,
  itemsLoaded,
  catchError,
  itemsRequested
}, dispatch);

const mapDetailsStateToProps = ({ itemDetails: { item, loading } }) => ({ item, loading })

const mapDetailsDispatchToProps = {
  onAddedToCart: itemAddedToCart,
  showItemDetails,
  catchError,
  closeItemDetails,
  openPopUpIngredientDetails,
  showDeatailsModal,
  hideDetailsModal
 };

// PAGES

const RoolsPage = compose(
  withSushistoreService(mapRoolsMethodToProps),
  connect(mapItemsStateToProps, mapItemsDispatchToProps)
)(ItemsListContainer);

const SetsPage = compose(
  withSushistoreService(mapSetsMethodToProps),
  connect(mapItemsStateToProps, mapItemsDispatchToProps)
)(ItemsListContainer);

const RollDetailsPage = compose(
  withSushistoreService(mapRoolsMethodToProps),
  connect(mapDetailsStateToProps, mapDetailsDispatchToProps)
)(ItemDeatailsContainer);

const SetDetailsPage = compose(
  withSushistoreService(mapSetsMethodToProps),
  connect(mapDetailsStateToProps, mapDetailsDispatchToProps)
)(ItemDeatailsContainer);

export {
  RoolsPage,
  SetsPage,
  RollDetailsPage,
  SetDetailsPage
};
