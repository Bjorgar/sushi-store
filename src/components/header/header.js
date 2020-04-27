import React from 'react';
import './header.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchPanelContainer from '../search-panel';
import { transferItemsType, openShoppingCart } from '../../actions';

const Header = ({ totalPrice, totalCount, transferItemsType, openShoppingCart }) => {
  return(
    <nav>
      <SearchPanelContainer />
      <ul className="nav-panel-items">
        <Link to="/rools/">
          <li onClick={() => transferItemsType('rools')} >Rools</li>
        </Link>
        <Link to="/sets/">
          <li onClick={() => transferItemsType('sets')}>Sets</li>
        </Link>
      </ul>
        <div
          className="cart"
          onClick={openShoppingCart}>
          <span><i className="fas fa-shopping-cart"></i></span>
          <span>{totalCount}</span>
          <span>{totalPrice}</span>
        </div>
    </nav>
  );
};

const mapStateToProps = ({ shoppingCart: { totalPrice, totalCount } }) => {
  return {
    totalPrice,
    totalCount
  };
};

const mapDispatchToProps = {
  transferItemsType,
  openShoppingCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
