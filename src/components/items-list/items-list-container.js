import React, { Component, Fragment } from 'react';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import ItemsList from './items-list';
import PageSwitch from './page-switch';
import DisplaySettings from './display-settings';
import './items-list.scss';
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

    
    this.checkListType()
  }

  checkListType = () => {
    const { location, transferListType } = this.props;
    
    if (location.pathname === '/') {
      transferListType('main');
    } else {
      transferListType('other');
    }
  };

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

  collectItemsData = (arr) => {
    const { transferItemsData } = this.props;
    const itemsData = [];

    arr.forEach((item) => {
      itemsData.push({ itemType: item.type, itemId: item.id });
    });
    
    transferItemsData(itemsData);
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
          this.collectItemsData(
            this.compileArrWithItems().sort((a, b) => a.price - b.price)
          )
        );
      case 'убыванию цены':
        return ( 
          this.collectItemsData(
            this.compileArrWithItems().sort((a, b) => b.price - a.price)
          )
        );
      case 'возростанию веса':
        return ( 
          this.collectItemsData(
            this.compileArrWithItems().sort((a, b) => a.weight - b.weight)
          )
        );
      case 'уменьшению веса':
        return ( 
          this.collectItemsData(
            this.compileArrWithItems().sort((a, b) => b.weight - a.weight)
          )
        );
      default:
        return this.collectItemsData(this.arrWithItems);
    };
  };

  render() {
    const { items, onAddedToCart, loading, hasError, pageNumber, location } = this.props;

    const itemsKind = (location.pathname === '/') ? 'Всё меню' :
      (location.pathname === '/rools/') ? 'Роллы' :
      (location.pathname === '/sets/') ? 'Сеты' :
      (location.pathname === '/noodles/') ? 'Лапша' :
      (location.pathname === '/salads/') ? 'Салаты' : '';

    const viewComponent = (hasError) ? <ErrorIndicator /> :
      (loading) ? <Spinner /> :
      <Fragment>
        <DisplaySettings itemsKind={itemsKind} />
        <ItemsList
            items={items}
            onAddedToCart={onAddedToCart}/>
        <PageSwitch
          selectedPage={pageNumber}
          separatedItems={this.arrWithItems}
          onPageSelected={this.onPageSelected}/>
      </Fragment>

    return(
      <div className="items-list-main-box">
        {viewComponent}
      </div>
    );
  }
};

export default withRouter(ItemsListContainer);
