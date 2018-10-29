import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MoviesContainer.css';
import MovieCard from '../MovieCard/MovieCard';
import Button from '../../common/Button/Button';
import Modal from '../../common/Modal/Modal';
import AddMovieForm from '../Forms/AddMovieForm';
import EditMovieForm from '../Forms/EditMovieForm';
import { fetchMoviesList, editMovie, deleteMovie, addMovie, clearErrors } from '../../store/actions'

class MoviesContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
            formType: null,
            selectedMovie: null,
            popupOpen: false,
            selectedToDelete: null,
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
                       selectedMovie: selectedMovie,
                       clearForm: true })
        this.toggleModal()
    }
    clearForm = () => {
        this.props.dispatch(clearErrors())
        this.setState({ clearForm: false })
        this.toggleModal()
    }

    handleClickOnDelete = (id) =>  {
        this.setState({ selectedToDelete: id })
        this.togglePopup()
    }
    onFormSubmit = (movie) => {
        if (this.state.formType === 'edit') {
            this.props.dispatch(editMovie(movie))
        }
        if (this.state.formType === 'add') {
            this.props.dispatch(addMovie(movie))
        }
    }
    confirmDeletion = () => {
        this.props.dispatch(deleteMovie(this.state.selectedToDelete))
        this.togglePopup()
    }
    onAddMovie = () => {
        this.toggleModal()
        this.setState({formType: 'add'})
    }
    renderForm() {
        switch (this.state.formType) {
            case "add":
                return (
                    <AddMovieForm 
                        modalOpen = { this.state.modalOpen } 
                        modalClose = { this.clearForm }
                        onFormCancel = { this.clearForm } 
                        handleFormSubmit = { this.onFormSubmit } 
                        movie = { this.state.selectedMovie }>
                    </AddMovieForm>
                )
            case "edit":
                return (
                    <EditMovieForm 
                        modalOpen = { this.state.modalOpen } 
                        modalClose = { this.clearForm }
                        onFormCancel = { this.clearForm } 
                        handleFormSubmit = { this.onFormSubmit } 
                        movie = { this.state.selectedMovie }>
                    </EditMovieForm> 
                )    
            default:
                break;
        }
    }
    render() {
        return (
            <main className = "movies-container">
               { this.props.moviesList
                    .map(movie => <MovieCard {...movie } 
                    onDeleteMovie = { this.handleClickOnDelete } 
                    handleClickOnEdit = { this.onEditMovie } key = { movie.imdbID } />) }
               <Button 
                    className = "add-btn"
                    icon = "plus"
                    onClick = { this.onAddMovie }>
                </Button>
                { this.state.modalOpen ? this.renderForm() : null }
                <Modal className = "popup"
                    modalOpen = { this.state.popupOpen }
                    modalClose = { this.togglePopup }>
                    <p> Are you sure you want to delete this movie?</p>
                    <footer className = "popup-buttons">
                        <Button onClick = { (e) => this.confirmDeletion(e) } label = "OK"/>   
                        <Button onClick = { this.togglePopup } label = "Cancel"/>  
                    </footer>
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