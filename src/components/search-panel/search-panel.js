import React, { Component } from 'react';
import './search-panel.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator'
import { withSushistoreService } from '../hoc';
import { connect } from 'react-redux';
import {
  transferValue,
  showFoundedItems,
  searchError,
  searchEnded,
  showDeatailsModal,
  hideDetailsModal,
  initialPosition,
  itemAddedToCart } from '../../actions';
import { compose, onInitialPosition } from '../utils';
import FindedItems from './finded-items';

class SearchPanelContainer extends Component {

  searchingItems = (data) => {
    const { term, showFoundedItems } = this.props;

    const result = data.filter((item) => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
    showFoundedItems(result);
  }

  initialSearching = (e) => {
    const { transferValue,  getData, searchError, searchEnded } = this.props;
    const term = e.target.value;
    transferValue(term);
    if (term === '') {
      searchEnded();
    } else {
      getData()
        .then((data) => this.searchingItems(data))
        .catch((err) => searchError(err))
    }
  };

  componentDidMount = () => {
    const { searchEnded } = this.props;
    const searchingBox = document.querySelector('.searching-box');
    document.addEventListener('click', e => {
      let target = e.target;
      if (target === searchingBox || searchingBox.contains(target)) {
        return
      }
      searchEnded();
    })
  };

  render() {

    const { term, loading, error, isActive, items, showDeatailsModal, hideDetailsModal, onAddedToCart } = this.props;

    const clazz = (isActive) ? 'searching-results' : 'hide-list';

    const display = (error) ? <ErrorIndicator /> :
                    (loading) ? <Spinner /> : <FindedItems
                                                items={items}
                                                onShowDeatailsModal={showDeatailsModal}
                                                onHideDetailsModal={hideDetailsModal}
                                                onInitialPosition={onInitialPosition}
                                                onAddedToCart={onAddedToCart}/>;
    
    return (
      <div className="searching-box">
        <input
          className="searching-input"
          placeholder="Searching"
          value={term}
          onChange={this.initialSearching}
          />
        <ul className={clazz}>
          {display}
        </ul>
      </div>
    );

  }
}

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
  showFoundedItems,
  searchError,
  searchEnded,
  showDeatailsModal,
  hideDetailsModal,
  initialPosition,
};

export default compose(
  withSushistoreService(getAllItems),
  connect(mapStateToProps, mapDispatchToProps)
)(SearchPanelContainer);
