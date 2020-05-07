import React, { Component, Fragment } from 'react';
import ItemDetails from './item-details';
import Spinner from '../spinner';
import { withRouter } from 'react-router-dom';

class ItemDeatailsContainer extends Component {

  renderComponent = () => {
    const { getData, catchError } = this.props;

    getData()
      .then((data) => this.extractItem(data))
      .catch((err) => catchError(err));
  }

  extractItem = (data) => {
    const { itemId, showItemDetails } = this.props;

    const item = data.find((item) => item.id === itemId);
    showItemDetails(item);
  };
  
  componentDidMount() {
    this.renderComponent();
  }

  componentDidUpdate(prevProps) {
    const { deactivateActiveLi } = this.props;
    if (this.props.itemId !== prevProps.itemId) {
      this.renderComponent();
      deactivateActiveLi();
    } 
    return
  }

  closeDetailsPage = ({ type }) => {
    const { history, closeItemDetails, closePopUpIngredientDetails, deactivateActiveLi } = this.props;
    history.push(`/${type}/`);
    closePopUpIngredientDetails();
    closeItemDetails();
    deactivateActiveLi();
  };

  getItemsId = () => {
    const { getData, transferItemsId, catchError } = this.props;

    getData()
      .then((data) => {
        const itemsId = [];
        data.forEach((item) => itemsId.push(item.id));
        transferItemsId(itemsId);
      })
      .catch((err) => catchError(err))
  }

  render() {
    const { item, onAddedToCart, loading, closePopUpIngredientDetails, itemsId } = this.props;
    
    if (loading) {
      return <Spinner />
    }
    return(
      <Fragment>
        <ItemDetails
          closePopUpIngredientDetails={closePopUpIngredientDetails}
          itemsId={itemsId}
          item={item}
          onAddedToCart={onAddedToCart}
          closeDetailsPage={() => this.closeDetailsPage(item)}
          getItemsId={this.getItemsId} />
      </Fragment>
    );
  }
};

export default  withRouter(ItemDeatailsContainer);
