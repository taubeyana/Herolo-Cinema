import React, { Component, Fragment } from 'react';
import './App.css';
import './utils/fontAwesome';

import Header from './components/Header/Header';
import MoviesContainer from './components/MoviesContainer/MoviesContainer'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header title = "Herolo Cinema" />
        <MoviesContainer/>
      </Fragment>
    );
  }
}

export default App;
