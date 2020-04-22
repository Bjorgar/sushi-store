import React from 'react';
import './header.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchPanelContainer from '../search-panel';
import { transferItemsType } from '../../actions';

const Header = ({ total, totalCount, transferItemsType }) => {
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
      <Link to="/cart/">
        <div className="cart">
          <span><i className="fas fa-shopping-cart"></i></span>
          <span>{totalCount}</span>
          <span>{total}</span>
        </div>
      </Link>
    </nav>
  );
};

const mapStateToProps = ({ shoppingCart: { total, totalCount } }) => {
  return {
    total,
    totalCount
  };
};

const mapDispatchToProps = {
  transferItemsType
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
