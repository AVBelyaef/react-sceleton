import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers/rootReducer';

import App from './components/App/App';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';
import Service from './services/service';
import { ServiceProvider } from './components/ServiceContext/ServiceContext';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ServiceProvider value={Service}>
        <Router>
          <App />
        </Router>
      </ServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
