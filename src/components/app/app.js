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
import '../../main.scss';
import UpsaleNavigateBloc from '../upsale-navigate-block';
import { mouseClickEvent } from '../utils';

class App extends Component {

  componentDidMount() {
    document.addEventListener('click', (e) => mouseClickEvent(e));
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

export default App;
