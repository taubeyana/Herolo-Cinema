import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MoviesContainer.css';
import MovieCard from '../MovieCard/MovieCard';
import Button from '../../common/Button/Button';
import Modal from '../../common/Modal/Modal';


//temp!!! 

class MoviesContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false
        }
    }
    toggleModal = () => {
        this.setState({ 
            modalOpen: !this.state.modalOpen
        })
    }
    
    render() {
        return (
            <main className = "movies-container">
               { this.props.moviesList.map(movie => <MovieCard poster = { movie.Poster } key = { movie.imdbID } />)}
               <Button 
                    className = "add-btn"
                    label = 'add' 
                    handleClick = { () => this.toggleModal() }>
                </Button>
               <Modal 
                    modalOpen = { this.state.modalOpen } 
                    modalClose = { this.toggleModal }>
                </Modal>
            </main>
        )
    }
}
const mapStateToProps = state => ({
        moviesList: state.moviesList,
        loading: state.loading
})
export default connect(mapStateToProps)(MoviesContainer);