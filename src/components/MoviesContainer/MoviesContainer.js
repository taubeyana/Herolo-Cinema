import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MoviesContainer.css';
import MovieCard from '../MovieCard/MovieCard';
import Button from '../../common/Button/Button';
import Modal from '../../common/Modal/Modal';
import Form from '../../common/Form/Form';

import { fetchMoviesList, editMovie } from '../../store/actions'

class MoviesContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
            formType: null,
            selectedMovie: null
        }
    }
    toggleModal = () => {
        this.setState({ 
            modalOpen: !this.state.modalOpen
        })
    }
    componentDidMount() {
        this.props.dispatch(fetchMoviesList()) 
        
    }
    onEditMovie = (id) =>  {
        console.log(id)
        let selectedMovie = this.props.moviesList
                            .filter(movie => movie.imdbID === id)
                            .pop()
        this.setState({formType: 'edit',
                       selectedMovie: selectedMovie })
        this.toggleModal()
        
        // this.props.dispatch(editMovie(id))
    }

    onFormSubmit = (movie) => {
        console.log(movie)
        this.props.dispatch(editMovie(movie))
        this.toggleModal()
    }
    // onInputChange = (id) => {
    //     console.log(id)
    //     this.props.dispatch(editMovie(id.target.value))
    // }
    onAddMovie = () => {
        this.toggleModal()
        this.setState({formType: 'add'})
    }
    
    render() {
        return (
            <main className = "movies-container">
               { this.props.moviesList.map(movie => <MovieCard {...movie } handleClick = { this.onEditMovie } />) }
               <Button 
                    className = "add-btn"
                    label = 'add' 
                    handleClick = { this.onAddMovie }>
                </Button>
               <Modal 
                    modalOpen = { this.state.modalOpen } 
                    modalClose = { this.toggleModal }>
                    <Form onFormCancel = { this.toggleModal } handleChange = {this.onFormSubmit} formType = { this.state.formType } movie = { this.state.selectedMovie }/>
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