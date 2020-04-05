import React, { Component } from 'react';
import ItemDetails from './item-details';
import Spinner from '../spinner';

class ItemDeatailsContainer extends Component {

  extractItem = (data) => {
    const { itemId, showItemDetails } = this.props;

    const item = data.find((item) => item.id === itemId);
    showItemDetails(item);
  };
  
  componentDidMount() {
    const { getData, catchError } = this.props;

    getData()
      .then((data) => this.extractItem(data))
      .catch((err) => catchError(err));
  }

  render() {
    const { item, onAddedToCart, closeItemDetails, loading } = this.props;
    if (loading) {
      return <Spinner />
    }
    return(
      <ItemDetails item={item} onAddedToCart={onAddedToCart} closeItemDetails={closeItemDetails} />
    );
  }
};

export default ItemDeatailsContainer;
