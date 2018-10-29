import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import './store/configureStore';
import './App.css';
import './utils/fontAwesome';
import MoviesContainer from './components/MoviesContainer/MoviesContainer';
import Header from './components/Header/Header';
import configureStore from './store/configureStore';

export const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
      <Fragment>
        <MoviesContainer/>
        <Header/>
        </Fragment>
      </Provider>
      );
    }
  }

  export default App;
