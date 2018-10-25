import React, { Component } from 'react';
import './MoviesContainer.css';
import MovieCard from '../MovieCard/MovieCard';

class MoviesContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main className = "movies-container" >
                <MovieCard/>
            </main>
        )
    }
}

export default MoviesContainer