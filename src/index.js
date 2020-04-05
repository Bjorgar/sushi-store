import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import SushistoreService from './services/sushi-store-service';
import { SushistoreServiceProvider } from './components/sushistore-service-context';

import store from './store';

const sushistoreService = new SushistoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <SushistoreServiceProvider value={sushistoreService}>
        <Router>
          <App />
        </Router>
      </SushistoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
