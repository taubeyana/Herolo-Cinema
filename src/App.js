import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import './store/configureStore';
import './App.css';
import './utils/fontAwesome';

import Header from './components/Header/Header';
import MoviesContainer from './components/MoviesContainer/MoviesContainer'
import configureStore from './store/configureStore';

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Fragment>
          <Header title = "Herolo Cinema" />
          <MoviesContainer/>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
