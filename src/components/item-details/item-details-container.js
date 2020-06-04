import React, { Component } from 'react';
import ItemDetails from './item-details';
import Spinner from '../spinner';
import { withRouter } from 'react-router-dom';
import { routingToDetailsPage } from '../utils';
import './item-details.scss';
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
    const { history, closeItemDetails, closePopUpIngredientDetails, deactivateActiveLi, listType } = this.props;
    if (listType === 'main') {
      history.push('/');
    } else {
      history.push(`/${type}/`);
    }
    closePopUpIngredientDetails();
    closeItemDetails();
    deactivateActiveLi();
  };

  collectItemsData = () => {
    const { getData, transferItemsData, catchDetailsError } = this.props;

    getData()
      .then((data) => {
        const itemsData = [];
        data.forEach((item) => itemsData.push({itemType:item.type, itemId:item.id}));
        transferItemsData(itemsData);
      })
      .catch((err) => catchDetailsError(err))
  }

  setItem = (id, action) => {
    const { history, itemsData } = this.props;
    const actualIdx = itemsData.findIndex((partOfArr) => partOfArr.itemId === id);
    let setIdx;

    if (action === 'inc') {
      setIdx = (actualIdx === (itemsData.length - 1)) ? 0 : actualIdx + 1;
    } else if (action === 'dec') {
      setIdx = (actualIdx === 0) ? itemsData.length - 1 : actualIdx - 1;
    }

    routingToDetailsPage(
      {
        type: itemsData[setIdx].itemType,
        id: itemsData[setIdx].itemId
      }, history)
  };

  render() {
    const { item, onAddedToCart, loading, closePopUpIngredientDetails, itemsData, error } = this.props;
    
    if (itemsData === null) { this.collectItemsData() };

    const viewComponent = (error) ? <ErrorIndicator /> :
      (loading) ? <Spinner /> :
      <ItemDetails
      item={item}
      onAddedToCart={onAddedToCart}
      closeDetailsPage={() => this.closeDetailsPage(item)} /> ;

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
