import React, { Component } from 'react';
import ItemDetails from './item-details';

class ItemDeatailsContainer extends Component {

  extractItem = (data) => {
    const { itemId, showItemDetails } = this.props;

    const item = data.find((item) => item.id === itemId);
    console.log(item);
    showItemDetails(item);
  };
  
  componentDidMount() {
    const { getData, catchError } = this.props;

    getData()
      .then((data) => this.extractItem(data))
      .catch((err) => catchError(err));
  }

  render() {
    const { item } = this.props;
    return(
      <ItemDetails item={item} />
    );
  }
};

export default ItemDeatailsContainer;
