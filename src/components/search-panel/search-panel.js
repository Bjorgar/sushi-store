import React, { Component } from 'react';
import './search-panel.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'
import { withSushistoreService } from '../hoc';
import { connect } from 'react-redux';
import {
  transferValue,
  showFoundItems,
  searchError,
  showDeatailsModal,
  hideDetailsModal,
  initialPosition,
  itemAddedToCart,
  searchEnded } from '../../actions';
import { compose, onInitialPosition } from '../utils';
import FoundItems from './found-items';

class SearchPanelContainer extends Component {

  searchingItems = (data) => {
    const { term, showFoundItems } = this.props;

    if (term === '') {
      return
    }
    const result = data.filter((item) => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
    showFoundItems(result);
  }

  initialSearching = (e) => {
    const { transferValue,  getData, searchError, searchEnded } = this.props;
    const term = e.target.value;
    
    transferValue(term);

    const termValid = term.match(/^\S/);
    
    if (term === '' || !termValid) {
      searchEnded();
    } else {
      getData()
        .then((data) => this.searchingItems(data))
        .catch((err) => searchError(err))
    }
  };

  render() {

    const {
      term,
      loading,
      error,
      isActive,
      items,
      showDeatailsModal,
      hideDetailsModal,
      onAddedToCart,
      searchEnded } = this.props;

    const clazz = (isActive) ? 'searching-results' : 'hide-list';

    const display = (error) ? <ErrorIndicator /> :
                    (loading) ? <Spinner /> : <FoundItems
                                                items={items}
                                                onShowDeatailsModal={showDeatailsModal}
                                                onHideDetailsModal={hideDetailsModal}
                                                onInitialPosition={onInitialPosition}
                                                onAddedToCart={onAddedToCart}
                                                searchEnded={searchEnded} />;
    
    return (
      <div className="searching-box">
        <input
          className="searching-input"
          placeholder="поиск..."
          value={term}
          onChange={this.initialSearching}
          />
        <ul className={clazz}>
          {display}
        </ul>
      </div>
    );
  }
};

const getAllItems = (sushistoreService) => ({
  getData: sushistoreService.getAllItems
});

const mapStateToProps = ({ itemsSearch: { items, term, loading, isActive, error } }) => ({
  items,
  term,
  loading,
  isActive,
  error
});

const mapDispatchToProps = {
  onAddedToCart: itemAddedToCart,
  transferValue,
  showFoundItems,
  searchError,
  showDeatailsModal,
  hideDetailsModal,
  initialPosition,
  searchEnded
};

export default compose(
  withSushistoreService(getAllItems),
  connect(mapStateToProps, mapDispatchToProps)
)(SearchPanelContainer);
