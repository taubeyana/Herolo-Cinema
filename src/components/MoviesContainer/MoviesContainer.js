import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MoviesContainer.css';
import MovieCard from '../MovieCard/MovieCard';
import Button from '../../common/Button/Button';
import Modal from '../../common/Modal/Modal';
import Form from '../../common/Form/Form';

import { fetchMoviesList, editMovie, deleteMovie } from '../../store/actions'

class MoviesContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
            formType: null,
            selectedMovie: null,
            popupOpen: false,
            selectedToDelete: null
        }
    }
    toggleModal = () => {
        this.setState({ 
            modalOpen: !this.state.modalOpen
        })
    }
    togglePopup = () => {
        this.setState({ 
            popupOpen: !this.state.popupOpen
        })
    }
    componentDidMount() {
        this.props.dispatch(fetchMoviesList()) 
        
    }
    onEditMovie = (id) =>  {
        let selectedMovie = this.props.moviesList
                            .filter(movie => movie.imdbID === id)
                            .pop()
        this.setState({formType: 'edit',
                       selectedMovie: selectedMovie })
        this.toggleModal()
    }
    handleClickOnDelete = (id) =>  {
        this.togglePopup()
        this.setState({ selectedToDelete: id })
    }

    onFormSubmit = (movie) => {
        this.props.dispatch(editMovie(movie))
        this.toggleModal()
    }
    confirmDeletion = () => {
        this.props.dispatch(deleteMovie(this.state.selectedToDelete))
        this.togglePopup()

    }
    onAddMovie = () => {
        this.toggleModal()
        this.setState({formType: 'add'})
    }
    
    render() {
        return (
            <main className = "movies-container">
               { this.props.moviesList.map(movie => <MovieCard {...movie } onDeleteMovie = { this.handleClickOnDelete } handleClickOnEdit = { this.onEditMovie } />) }
               <Button 
                    className = "add-btn"
                    label = 'add' 
                    handleClick = { this.onAddMovie }>
                </Button>
                <Modal 
                // type = 'modal'
                    modalOpen = { this.state.modalOpen } 
                    modalClose = { this.toggleModal }>
                    <Form onFormCancel = { this.toggleModal } handleChange = {this.onFormSubmit} formType = { this.state.formType } movie = { this.state.selectedMovie }/>
                </Modal>
                <Modal 
                    // type='popup'
                    modalOpen = { this.state.popupOpen }
                    modalClose = { this.togglePopup }>
                    <button onClick = { (e) => this.confirmDeletion(e) }> OK </button>    
                    <button onClick = { this.togglePopup }> Cancel </button>    
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