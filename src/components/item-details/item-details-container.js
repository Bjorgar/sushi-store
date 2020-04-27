import React, { Component, Fragment } from 'react';
import ItemDetails from './item-details';
import Spinner from '../spinner';
import { withRouter } from 'react-router-dom';

class ItemDeatailsContainer extends Component {

  renderComponent = () => {
    const { getData, catchError } = this.props;

    getData()
      .then((data) => this.extractItem(data))
      .catch((err) => catchError(err));
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
    if (this.props.itemId !== prevProps.itemId) {
      this.renderComponent();
    } 
    return
  }

  closeDetailsPage = ({ type }) => {
    const { history, closeItemDetails, closePopUpIngredientDetails } = this.props;
    history.push(`/${type}/`);
    closePopUpIngredientDetails();
    closeItemDetails();
  };

  render() {
    const { item, onAddedToCart, loading, closePopUpIngredientDetails, itemsId } = this.props;
    
    if (loading) {
      return <Spinner />
    }
    return(
      <Fragment>
        <ItemDetails
          closePopUpIngredientDetails={closePopUpIngredientDetails}
          itemsId={itemsId}
          item={item}
          onAddedToCart={onAddedToCart}
          closeDetailsPage={() => this.closeDetailsPage(item)} />
      </Fragment>
    );
  }
};

export default  withRouter(ItemDeatailsContainer);
