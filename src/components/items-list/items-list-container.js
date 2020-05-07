import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import ItemsList from './items-list';
import PageSwitch from './page-switch';
import DisplaySettings from './display-settings';
import './items-list.css';
import { withRouter } from 'react-router-dom';

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
    const { quantity, order } = this.props;
    if (quantity !== prevProps.quantity) {
    // When we change quantity, we must show page with 0 idx      
      this.separateItems(this.compileArrWithItems(), 0);
    }
    if (order !== prevProps.order) {
      this.selectOrder();
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
    const { quantity } = this.props;
    const separatedItems = [];

    while (arr.length) {
      separatedItems.push(arr.splice(0, quantity))
    }
    
    this.arrWithItems = separatedItems;
    this.showItemsAtPage(num);
  };

  showItemsAtPage = (num) => {
    const { itemsLoaded, pageNumber, savedType, saveItemsType, selectPageNumber, location } = this.props;

    const type = location.pathname

    saveItemsType(type);

    const page = (num === 0 || type !== savedType) ? 0 :
          (num > 0) ? num :
          pageNumber;

    if (num !== undefined) {
      selectPageNumber(num);
    } else if (type !== savedType) {
      selectPageNumber(0);
    }

    itemsLoaded(this.arrWithItems[page]);
  };

  onPageSelected = (idx) => {
    this.showItemsAtPage(idx);
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
    const { items, onAddedToCart, loading, hasError, pageNumber, location } = this.props;

    const itemsKind = (location.pathname === '/') ? 'Всё меню' :
      (location.pathname === '/rools/') ? 'Роллы' :
      (location.pathname === '/sets/') ? 'Сеты' :
      (location.pathname === '/noodles/') ? 'Лапша' :
      (location.pathname === '/salads/') ? 'Салаты' : '';

    if (hasError) {
      return <ErrorIndicator />
    }

    if (loading) {
      return <Spinner />
    }

    return(
      <div className="items-list-main-box">
        <DisplaySettings itemsKind={itemsKind} />
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

export default withRouter(ItemsListContainer);
