import React from 'react';
import SushiCart from '../sushi-cart';
import Header from '../header';
import Slider from '../slider';
import { RoolsPage, SetsPage, RollDetails, SetDetails } from '../pages';
import { Switch, Route } from 'react-router-dom';
import IngredientsModalWindow from '../ingredients-modal-window';

const App = () => {

  return (
    <div>
      <Header />
      <Slider />
      <IngredientsModalWindow />
      <Switch>
        <Route path="/rools" exact component={RoolsPage} />
        <Route path="/rools/:id" 
               render={({ match }) => {
                 const { id } = match.params;
                 return <RollDetails itemId={+id} />
               }} />
        <Route path="/sets" exact component={SetsPage} />
        <Route path="/sets/:id" 
               render={({ match }) => {
                 const { id } = match.params;
                 return <SetDetails itemId={+id} />
               }} />
        <Route path="/cart" component={SushiCart} />
      </Switch>
    </div>
  );
};

export default App;