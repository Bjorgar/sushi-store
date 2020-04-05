import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import withSushistoreService from '../hoc';
import { itemsLoaded, catchError, itemAddedToCart, itemsRequested, showItemDetails } from '../../actions';
import compose from '../utils';
import ItemsListContainer from '../items-list';
import ItemDeatailsContainer from '../item-details';


const mapRoolsMethodToProps = (sushistoreService) => ({
  getData: sushistoreService.getRools
});

const mapSetsMethodToProps = (sushistoreService) => ({
  getData: sushistoreService.getSets
});

// CONNECT REDUX

const mapItemsStateToProps = ({ itemsList: { items, loading, hasError } }) => {
  return {
    items,
    loading,
    hasError
  };
};

const mapItemsDispatchToProps = (dispatch) => bindActionCreators({
  onAddedToCart: itemAddedToCart,
  itemsLoaded,
  catchError,
  itemsRequested
}, dispatch);

const mapDetailsStateToProps = ({ itemDetails: { item } }) => ({ item })

const mapDetailsDispatchToProps = { showItemDetails, catchError };

// PAGES

const RoolsItems = compose(
  withSushistoreService(mapRoolsMethodToProps),
  connect(mapItemsStateToProps, mapItemsDispatchToProps)
)(ItemsListContainer);

const SetsItems = compose(
  withSushistoreService(mapSetsMethodToProps),
  connect(mapItemsStateToProps, mapItemsDispatchToProps)
)(ItemsListContainer);

const RollDetails = compose(
  withSushistoreService(mapRoolsMethodToProps),
  connect(mapDetailsStateToProps, mapDetailsDispatchToProps)
)(ItemDeatailsContainer);

const SetDetails = compose(
  withSushistoreService(mapSetsMethodToProps),
  connect(mapDetailsStateToProps, mapDetailsDispatchToProps)
)(ItemDeatailsContainer);

export {
  RoolsItems,
  SetsItems,
  RollDetails,
  SetDetails
};
