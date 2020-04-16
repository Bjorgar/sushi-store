import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import ItemsList from './items-list';
import PageSwitch from './page-switch'
import './items-list.css';

class ItemsListContainer extends Component {

  separatedItems = [];
  size = 12;
  selectedPage = 0;

  componentDidMount() {
    const { catchError, itemsRequested, getData } = this.props;
    itemsRequested();
    getData()
      .then((data) => this.separateItems(data))
      .catch((err) => catchError(err));
  }

  separateItems = (data) => {
    const { itemsLoaded } = this.props;
    for (let i=0; i < Math.ceil(data.length/this.size); i++) {
      this.separatedItems.push(data.slice( (i*this.size), (i*this.size) + this.size));
    }
    itemsLoaded(this.separatedItems[this.selectedPage]);
  }

  onPageSelected = (idx) => {
    const { itemsLoaded } = this.props;
    this.selectedPage = idx;
    itemsLoaded(this.separatedItems[this.selectedPage]);
  }

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
        <ItemsList
            items={items}
            onAddedToCart={onAddedToCart}/>
        <PageSwitch
          selectedPage={this.selectedPage}
          separatedItems={this.separatedItems}
          onPageSelected={this.onPageSelected}/>
      </div>
    );
  }
};

export default ItemsListContainer;
