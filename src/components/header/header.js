import React from 'react';
import './header.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchPanelContainer from '../search-panel';

const Header = ({ total, totalCount }) => {
  return(
    <nav>
      <SearchPanelContainer />
      <ul className="nav-panel-items">
        <Link to="/rools/"><li>Rools</li></Link>
        <Link to="/sets/"><li>Sets</li></Link>
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

export default connect(mapStateToProps)(Header);
