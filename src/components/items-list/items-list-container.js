import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner';
import ItemsList from './items-list';

class ItemsListContainer extends Component {

  componentDidMount() {
    const { itemsLoaded, catchError, itemsRequested, getData } = this.props;
    itemsRequested();
    getData()
      .then((data) => itemsLoaded(data))
      .catch((err) => catchError(err));
  }

  render() {
    const { items, onAddedToCart, loading, hasError, onItemDetails } = this.props;

    if (hasError) {
      return <ErrorIndicator />
    }

    if (loading) {
      return <Spinner />
    }

    return(
      <ItemsList
          items={items}
          onAddedToCart={onAddedToCart}
          onItemDetails={onItemDetails}/>
    );
  }
};

export default ItemsListContainer;
