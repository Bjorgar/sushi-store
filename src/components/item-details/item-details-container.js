import React, { Component } from 'react';
import ItemDetails from './item-details';
import Spinner from '../spinner';
import { withRouter } from 'react-router-dom';
import { routingToDetailsPage } from '../utils';
import './item-details.css';
import ErrorIndicator from '../error-indicator';

class ItemDeatailsContainer extends Component {

  renderComponent = () => {
    const { getData, catchDetailsError, detailsRequested } = this.props;

    detailsRequested();
    getData()
      .then((data) => this.extractItem(data))
      .catch((err) => catchDetailsError(err));
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
    const { getData, transferItemsId, catchDetailsError } = this.props;

    getData()
      .then((data) => {
        const itemsId = [];
        data.forEach((item) => itemsId.push(item.id));
        transferItemsId(itemsId);
      })
      .catch((err) => catchDetailsError(err))
  }

  setItem = (id, action) => {
    const { history, item, itemsId } = this.props;
    const actualIdx = itemsId.findIndex((itemId) => itemId === id);
    let setIdx;

    if (action === 'inc') {
      setIdx = (actualIdx === (itemsId.length - 1)) ? 0 : actualIdx + 1;
    } else if (action === 'dec') {
      setIdx = (actualIdx === 0) ? itemsId.length - 1 : actualIdx - 1;
    }

    routingToDetailsPage(
      {
        type: item.type,
        id: itemsId[setIdx]
      }, history)
  };

  render() {
    const { item, onAddedToCart, loading, closePopUpIngredientDetails, itemsId, error } = this.props;
    
    const viewComponent = (error) ? <ErrorIndicator /> :
      (loading) ? <Spinner /> :
      <ItemDetails
      itemsId={itemsId}
      item={item}
      onAddedToCart={onAddedToCart}
      closeDetailsPage={() => this.closeDetailsPage(item)}
      getItemsId={this.getItemsId} /> ;
      

    return(
      <div className="details-background">
        <div className="details-body">
          {viewComponent}
        </div>
        <button
          onClick={() => {
          this.setItem(item.id, 'dec');
          closePopUpIngredientDetails()}}
          className="switch-btn switch-btn-left">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={() => {
          this.setItem(item.id, 'inc')
          closePopUpIngredientDetails()}}
          className="switch-btn switch-btn-right">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    );
  }
};

export default  withRouter(ItemDeatailsContainer);
