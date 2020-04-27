import React, { Component } from 'react';
import SushiCart from '../sushi-cart';
import Header from '../header';
import Slider from '../slider';
import { RoolsPage, SetsPage, RollDetailsPage, SetDetailsPage } from '../pages';
import { Switch, Route } from 'react-router-dom';
import IngredientsModalWindow from '../ingredients-modal-window';
import { connect } from 'react-redux';
import {
  searchEnded,
  closeQuantitySettings,
  closeOrderSettings } from '../../actions';

class App extends Component {

  clickEvent = (e) => {
    const { searchEnded, closeQuantitySettings, closeOrderSettings } = this.props;

    const searchingBox = document.querySelector('.searching-box');
    const quantitySettings = document.querySelector('.quantity-div');
    const orderSettings = document.querySelector('.order-div');

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
  };

  componentDidMount() {
    document.addEventListener('click', (e) => this.clickEvent(e));
  }

  render() {

    return (
      <div>
        <Header />
        <Slider />
        <IngredientsModalWindow />
        <SushiCart />
        <Switch>
          <Route path="/rools" exact component={RoolsPage} />
          <Route path="/rools/:id" 
                render={({ match }) => {
                  const { id } = match.params;
                  return <RollDetailsPage itemId={id} />
                }} />
          <Route path="/sets" exact component={SetsPage} />
          <Route path="/sets/:id" 
                render={({ match }) => {
                  const { id } = match.params;
                  return <SetDetailsPage itemId={id} />
                }} />
        </Switch>
      </div>
    );
  }
};

const mapDispatchToProps = {
  searchEnded,
  closeQuantitySettings,
  closeOrderSettings
};

export default connect(null, mapDispatchToProps)(App);