import { connect } from 'react-redux';
import { withSushistoreService } from '../hoc';
import {
  itemsLoaded,
  catchError,
  itemAddedToCart,
  itemsRequested,
  detailsRequested,
  showItemDetails,
  closeItemDetails,
  closePopUpIngredientDetails,
  transferItemsData,
  selectPageNumber,
  saveItemsType,
  deactivateActiveLi,
  catchDetailsError,
  transferListType } from '../../actions';
import { compose } from '../utils';
import ItemsListContainer from '../items-list';
import ItemDeatailsContainer from '../item-details';

const mapAllMethodToProps = (sushistoreService) => ({
  getData: sushistoreService.getAllItems
});

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
  displaySettings: { quantity, order } }) =>
  ({
    items,
    loading,
    hasError,
    quantity,
    order,
    pageNumber,
    itemsType,
    savedType
  });

const mapItemsDispatchToProps = {
  onAddedToCart: itemAddedToCart,
  itemsLoaded,
  catchError,
  itemsRequested,
  transferItemsData,
  selectPageNumber,
  saveItemsType,
  transferListType
};

const mapDetailsStateToProps = ({
  itemsList: { listType },
  itemDetails: { item, loading, itemsData, error } }) =>
  ({
    item,
    loading,
    itemsData,
    error,
    listType
  });

const mapDetailsDispatchToProps = {
  onAddedToCart: itemAddedToCart,
  showItemDetails,
  detailsRequested,
  catchError,
  closeItemDetails,
  closePopUpIngredientDetails,
  deactivateActiveLi,
  transferItemsData,
  catchDetailsError
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

const MainPage = createItemsPage(mapAllMethodToProps)

const RoolsPage = createItemsPage(mapRoolsMethodToProps);

const SetsPage = createItemsPage(mapSetsMethodToProps);

const NoodlesPage = createItemsPage(mapNoodlesMethodToProps);

const SaladsPage = createItemsPage(mapSaladsMethodToProps);

const RollDetailsPage = createDetailsPage(mapRoolsMethodToProps);

const SetDetailsPage = createDetailsPage(mapSetsMethodToProps);

const NoodlesDetailsPage = createDetailsPage(mapNoodlesMethodToProps);

const SaladDetailsPage = createDetailsPage(mapSaladsMethodToProps);

export {
  MainPage,
  RoolsPage,
  SetsPage,
  NoodlesPage,
  SaladsPage,
  RollDetailsPage,
  SetDetailsPage,
  NoodlesDetailsPage,
  SaladDetailsPage
};
