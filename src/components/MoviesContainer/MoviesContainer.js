import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MoviesContainer.css';
import MovieCard from '../MovieCard/MovieCard';
import Button from '../../common/Button/Button';
import Modal from '../../common/Modal/Modal';
import AddMovieForm from '../Forms/AddMovieForm';
import EditMovieForm from '../Forms/EditMovieForm';
import { fetchMoviesList, editMovie, deleteMovie, addMovie } from '../../store/actions'

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
                        modalClose = { this.toggleModal }
                        onFormCancel = { this.toggleModal } 
                        handleFormSubmit = { this.onFormSubmit } 
                        movie = { this.state.selectedMovie }>
                    </AddMovieForm>
                )
            case "edit":
                return (
                    <EditMovieForm 
                        modalOpen = { this.state.modalOpen } 
                        modalClose = { this.toggleModal }
                        onFormCancel = { this.toggleModal } 
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
                    handleClickOnEdit = { this.onEditMovie } />) }
               <Button 
                    className = "add-btn"
                    label = 'add' 
                    handleClick = { this.onAddMovie }>
                </Button>
                { this.state.modalOpen ? this.renderForm() : null }
                <Modal 
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