import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import SearchPanelContainer from '../search-panel';
import CartWidget from '../cart-widget';

const Header = ({ transferItemsType }) => {

  return(
    <nav>
      <SearchPanelContainer />
      <ul className="nav-panel-items">
        <Link to="/rools/">
          <li
            className="nav-panel-items-li">
            Роллы
          </li>
        </Link>
        <Link to="/sets/">
          <li
            className="nav-panel-items-li">
            Сеты
          </li>
        </Link>
        <Link to="/noodles/">
          <li
            className="nav-panel-items-li">
            Лапша
          </li>
        </Link>
        <Link to="/salads/">
          <li
            className="nav-panel-items-li li-last">
            Салаты
          </li>
        </Link>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Header;
