import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import ItemsList from './items-list';
import PageSwitch from './page-switch';
import DisplaySettings from './display-settings';
import './items-list.css';

class ItemsListContainer extends Component {

  arrWithItems = [];
  arrLength = 0;
  selectedPage = 0;
  
  componentDidMount() {
    const { catchError, itemsRequested, getData } = this.props;
    itemsRequested();
    getData()
      .then((data) => {
        this.arrWithItems = [...data];
        this.arrLength = data.length;
        this.selectOrder()})
      .catch((err) => catchError(err));
  }

  collectItemsId = (arr) => {
    const { transferItemsId } = this.props;
    const itemsId = [];
    arr.forEach((item) => {
      itemsId.push(item.id);
    });
    transferItemsId(itemsId);
    this.separateItems(arr);
  };
  
  separateItems = (arr) => {
    const { itemsLoaded, quantity } = this.props;
    const separatedItems = [];

    while (arr.length) {
      separatedItems.push(arr.splice(0, quantity))
    }

    this.arrWithItems = separatedItems;
    itemsLoaded(this.arrWithItems[this.selectedPage]);
  };

  onPageSelected = (idx) => {
    const { itemsLoaded } = this.props;
    this.selectedPage = idx;
    itemsLoaded(this.arrWithItems[this.selectedPage]);
  };

  compileArrWithItems = () => {
    const updatedArrWithItems = [];

    if (this.arrWithItems.length === this.arrLength) {
      return this.arrWithItems;
    }

    this.arrWithItems.forEach((part) => {
      part.forEach((item) => {
        updatedArrWithItems.push(item);
      });
    });
      
    return updatedArrWithItems;
  };

  selectQuantity = () => {
    this.selectedPage = 0;
    this.separateItems(this.compileArrWithItems());
  };

  selectOrder = () => {
    
    const { order } = this.props;

    switch (order) {
      case 'возростанию цены':
        return ( 
          this.collectItemsId(
            this.compileArrWithItems().sort((a, b) => a.price - b.price)
          )
        );
      case 'убыванию цены':
        return ( 
          this.collectItemsId(
            this.compileArrWithItems().sort((a, b) => b.price - a.price)
          )
        );
      case 'возростанию веса':
        return ( 
          this.collectItemsId(
            this.compileArrWithItems().sort((a, b) => a.weight - b.weight)
          )
        );
      case 'уменьшению веса':
        return ( 
          this.collectItemsId(
            this.compileArrWithItems().sort((a, b) => b.weight - a.weight)
          )
        );
      default:
        return this.collectItemsId(this.arrWithItems);
    };
  };

  render() {
    const { items, onAddedToCart, loading, hasError } = this.props;

    if (hasError) {
      return <ErrorIndicator />
    }

    if (loading) {
      return <Spinner />
    }

    return(
      <div className="items-list-main-box">
        <DisplaySettings
          selectOrder={this.selectOrder}
          selectQuantity={this.selectQuantity} />
        <ItemsList
            items={items}
            onAddedToCart={onAddedToCart}/>
        <PageSwitch
          selectedPage={this.selectedPage}
          separatedItems={this.arrWithItems}
          onPageSelected={this.onPageSelected}/>
      </div>
    );
  }
};

export default ItemsListContainer;
