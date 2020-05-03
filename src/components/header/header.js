import React from 'react';
import './header.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchPanelContainer from '../search-panel';
import { transferItemsType } from '../../actions';
import CartWidget from '../cart-widget';

const Header = ({ transferItemsType }) => {

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
      <CartWidget />
    </nav>
  );
};

const mapDispatchToProps = {
  transferItemsType
};

export default connect(null, mapDispatchToProps)(Header);
