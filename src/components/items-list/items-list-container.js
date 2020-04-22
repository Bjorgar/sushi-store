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

  componentDidUpdate(prevProps) {
    const { selectPageNumber, quantity, order } = this.props;
    if (quantity !== prevProps.quantity) {
      selectPageNumber(0);
      this.separateItems(this.compileArrWithItems(), 0);
    }
    if (order !== prevProps.order) {
      this.selectOrder()
    } 
    return
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
  
  separateItems = (arr, num) => {
    const { itemsLoaded, quantity, pageNumber } = this.props;
    const separatedItems = [];

    const n = (num === undefined) ? pageNumber: num

    while (arr.length) {
      separatedItems.push(arr.splice(0, quantity))
    }

    this.arrWithItems = separatedItems;
    itemsLoaded(this.arrWithItems[n]);
  };

  onPageSelected = (idx) => {
    const { selectPageNumber, itemsLoaded } = this.props;
    selectPageNumber(idx);
    itemsLoaded(this.arrWithItems[idx]);
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
    const { items, onAddedToCart, loading, hasError, pageNumber } = this.props;

    if (hasError) {
      return <ErrorIndicator />
    }

    if (loading) {
      return <Spinner />
    }

    return(
      <div className="items-list-main-box">
        <DisplaySettings />
        <ItemsList
            items={items}
            onAddedToCart={onAddedToCart}/>
        <PageSwitch
          selectedPage={pageNumber}
          separatedItems={this.arrWithItems}
          onPageSelected={this.onPageSelected}/>
      </div>
    );
  }
};

export default ItemsListContainer;
