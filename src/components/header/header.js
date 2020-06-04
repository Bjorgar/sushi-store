import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import SearchPanelContainer from '../search-panel';
import CartWidget from '../cart-widget';

const Header = ({ transferItemsType }) => {

  return(
    <nav>
      <SearchPanelContainer />
      <ul className="nav-panel-items">
        <Link to="/rools/">
          <li>
            Роллы
          </li>
        </Link>
        <Link to="/sets/">
          <li>
            Сеты
          </li>
        </Link>
        <Link to="/noodles/">
          <li>
            Лапша
          </li>
        </Link>
        <Link to="/salads/">
          <li>
            Салаты
          </li>
        </Link>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Header;
