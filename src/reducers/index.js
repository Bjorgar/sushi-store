
import updateItemsList from './items-list';
import updateShoppingCart from './shopping-cart';
import updateSlider from './slider';
import updateItemDetails from './item-details';
import updateSearching from './items-search';
import updateItemDetailsModal from './item-details-modal';
import updatePopUpIngredients from './pop-up-ingredients';
import updataDisplaySettings from './display-settings';

const reducer = (state, action) => {

  return {
    itemsList: updateItemsList(state, action),
    shoppingCart: updateShoppingCart(state, action),
    slider: updateSlider(state, action),
    itemDetails: updateItemDetails(state, action),
    itemsSearch: updateSearching(state, action),
    itemDetailsModal: updateItemDetailsModal(state, action),
    popUpIngredients: updatePopUpIngredients(state, action),
    displaySettings: updataDisplaySettings(state, action)
  };
};

export default reducer;