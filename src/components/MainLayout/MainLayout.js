import React, { Component } from 'react';
import './MainLayout.css';
import Header from '../Header/Header';
import MoviesContainer from '../MoviesContainer/MoviesContainer'

class MainLayout extends Component {
  render() {
    return (
        <div className = "main-layout">
          <Header title = "Herolo Cinema" />
          <MoviesContainer/>
        </div>
    );
  }
}

export default MainLayout;
