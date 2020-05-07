import React, { Component } from 'react';
import SushiCart from '../sushi-cart';
import Header from '../header';
import {
  MainPage,
  RoolsPage,
  SetsPage,
  NoodlesPage,
  SaladsPage,
  RollDetailsPage,
  SetDetailsPage,
  NoodlesDetailsPage,
  SaladDetailsPage } from '../pages';
import { Switch, Route } from 'react-router-dom';
import IngredientsModalWindow from '../ingredients-modal-window';
import { connect } from 'react-redux';
import {
  searchEnded,
  closeQuantitySettings,
  closeOrderSettings,
  openCloseSelectList } from '../../actions';
import './main.css';
import UpsaleNavigateBloc from '../upsale-navigate-block';

class App extends Component {

  clickEvent = (e) => {
    const { searchEnded, closeQuantitySettings, closeOrderSettings, openCloseSelectList } = this.props;

    const searchingBox = document.querySelector('.searching-box');
    const quantitySettings = document.querySelector('.quantity-div');
    const orderSettings = document.querySelector('.order-div');
    const deliveryBox = document.querySelector('.select-div');

    const target = e.target;
    
    if (!searchingBox || !quantitySettings || !orderSettings) {
      return
    }

    if (target === searchingBox || searchingBox.contains(target)) {
      closeQuantitySettings();
      closeOrderSettings();
    } else if (target === quantitySettings || quantitySettings.contains(target)) {
      searchEnded();
      closeOrderSettings();
    } else if (target === orderSettings || orderSettings.contains(target)) {
      searchEnded();
      closeQuantitySettings();
    } else {
      searchEnded();
      closeQuantitySettings();
      closeOrderSettings();
    }

    if (target === deliveryBox || deliveryBox.contains(target)) {
      return;
    } else {
      openCloseSelectList(false);
    }
  };

  componentDidMount() {
    document.addEventListener('click', (e) => this.clickEvent(e));
  }

  routingTo = (match, Wrapped) => {
    const { id } = match.params;
    return <Wrapped itemId={id} />
  };

  render() {

    return (
      <div>
        <Header />
        <UpsaleNavigateBloc />
        <IngredientsModalWindow />
        <SushiCart />
        <Switch>
          <Route path="/"  exact component={MainPage} />
          <Route path="/rools" exact component={RoolsPage} />
          <Route path="/rools/:id" 
                 render={({ match }) => this.routingTo(match, RollDetailsPage)} />
          <Route path="/sets" exact component={SetsPage} />
          <Route path="/sets/:id" 
                render={({ match }) => this.routingTo(match, SetDetailsPage)} />
          <Route path="/noodles" exact component={NoodlesPage} />
          <Route path="/noodles/:id" 
                render={({ match }) => this.routingTo(match, NoodlesDetailsPage)} />
          <Route path="/salads" exact component={SaladsPage} />
          <Route path="/salads/:id" 
                render={({ match }) => this.routingTo(match, SaladDetailsPage)} />
        </Switch>
      </div>
    );
  }
};

const mapDispatchToProps = {
  searchEnded,
  closeQuantitySettings,
  closeOrderSettings,
  openCloseSelectList
};

export default connect(null, mapDispatchToProps)(App);
