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
  closePopUpIngredientDetails,
  transferItemsId,
  selectPageNumber,
  saveItemsType } from '../../actions';
import { compose } from '../utils';
import ItemsListContainer from '../items-list';
import ItemDeatailsContainer from '../item-details';


const mapRoolsMethodToProps = (sushistoreService) => ({
  getData: sushistoreService.getRools
});

const mapSetsMethodToProps = (sushistoreService) => ({
  getData: sushistoreService.getSets
});

const mapNoodlesMethodToProps = (sushistoreService) => ({
  getData: sushistoreService.getNoodles
});

const mapSaladsMethodToProps = (sushistoreService) => ({
  getData: sushistoreService.getSalads
});

// CONNECT REDUX

const mapItemsStateToProps = ({
   itemsList: { items, loading, hasError, pageNumber, itemsType, savedType },
   displaySettings: { quantity, order } }) => {

  return {
    items,
    loading,
    hasError,
    quantity,
    order,
    pageNumber,
    itemsType,
    savedType
  };
};

const mapItemsDispatchToProps = (dispatch) => bindActionCreators({
  onAddedToCart: itemAddedToCart,
  itemsLoaded,
  catchError,
  itemsRequested,
  transferItemsId,
  selectPageNumber,
  saveItemsType
}, dispatch);

const mapDetailsStateToProps = ({ itemDetails: { item, loading, itemsId } }) => ({ item, loading, itemsId })

const mapDetailsDispatchToProps = {
  onAddedToCart: itemAddedToCart,
  showItemDetails,
  catchError,
  closeItemDetails,
  closePopUpIngredientDetails
 };

// PAGES

const createItemsPage = (mapMethodToProps) => {
  return(
    compose(
      withSushistoreService(mapMethodToProps),
      connect(mapItemsStateToProps, mapItemsDispatchToProps)
    )(ItemsListContainer)
  );
};

const createDetailsPage = (mapMethodToProps) => {
  return(
    compose(
      withSushistoreService(mapMethodToProps),
      connect(mapDetailsStateToProps, mapDetailsDispatchToProps)
    )(ItemDeatailsContainer)
  );
};

const RoolsPage = createItemsPage(mapRoolsMethodToProps);

const SetsPage = createItemsPage(mapSetsMethodToProps);

const NoodlesPage = createItemsPage(mapNoodlesMethodToProps);

const SaladsPage = createItemsPage(mapSaladsMethodToProps);

const RollDetailsPage = createDetailsPage(mapRoolsMethodToProps);

const SetDetailsPage = createDetailsPage(mapSetsMethodToProps);

const NoodlesDetailsPage = createDetailsPage(mapNoodlesMethodToProps);

const SaladDetailsPage = createDetailsPage(mapSaladsMethodToProps);

export {
  RoolsPage,
  SetsPage,
  NoodlesPage,
  SaladsPage,
  RollDetailsPage,
  SetDetailsPage,
  NoodlesDetailsPage,
  SaladDetailsPage
};
