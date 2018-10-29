import React, { Component }  from 'react';
import { connect } from 'react-redux';
import Input from '../../common/Input/Input';
import Modal from '../../common/Modal/Modal';
import Button from '../../common/Button/Button';
import { titleFormat } from '../../utils/validations'
import { formValidator } from '../../utils/validations';
import { setErrors } from '../../store/actions';

class EditMovieForm extends Component {
    constructor(props) {
        super(props)
        this.title = React.createRef()
        this.year = React.createRef()
        this.genre = React.createRef()
        this.runtime = React.createRef()
        this.director = React.createRef()
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        let movie = {
            Title: this.title.current.value,
            Year: this.year.current.value,
            Genre: this.genre.current.value,
            Runtime: this.runtime.current.value,
            Director: this.director.current.value,
            imdbID: this.props.movie.imdbID,
            Poster: this.props.movie.Poster
        }
        this.props.handleFormSubmit(movie)
        this.props.onFormCancel()
    }

    titleFormat = (e) => {
        e.preventDefault()
        this.title.current.value = titleFormat(this.title.current.value)
    }

    validateForm = (e,bool) => {
        e.preventDefault()
        if (!bool) this.onFormSubmit(e) 
        else {
            const values = {
                Title: this.title.current.value,
                Year: this.year.current.value,
                Genre: this.genre.current.value,
                Runtime: this.runtime.current.value,
                Director: this.director.current.value
            }
            let errors = formValidator(values)
            this.props.dispatch(setErrors(errors))
            if (Object.keys(errors).length === 0) this.onFormSubmit(e)
        }
    }

     render() {
        return (
            <Modal className = "form-modal"
                modalOpen = { this.props.modalOpen } 
                modalClose = { this.props.modalClose }>
                <form onSubmit = { e => this.onFormSubmit(e) } >
                    <h1> Edit a Movie </h1>
                    <Input onBlur = { e => this.titleFormat(e) } label = "Title" defaultValue = { this.props.movie.Title } inputRef = { this.title }  />
                    <span className = "error-message"> { this.props.errors.Title } </span>
                    <Input label = "Year" defaultValue = { this.props.movie.Year }  inputRef = { this.year }/>
                    <span className = "error-message"> { this.props.errors.Year } </span>
                    <Input label = "Genre" defaultValue = { this.props.movie.Genre } inputRef = { this.genre }/>
                    <span className = "error-message"> { this.props.errors.Genre } </span>
                    <Input label = "Runtime" defaultValue = { this.props.movie.Runtime } inputRef = { this.runtime }/>
                    <span className = "error-message"> { this.props.errors.Runtime } </span>
                    <Input label = "Director" defaultValue = { this.props.movie.Director } inputRef = { this.director }/>
                    <span className = "error-message"> { this.props.errors.Director } </span>
                    <Input label = "ID" defaultValue = { this.props.movie.imdbID } disabled/>
                    <footer className = "form-buttons"> 
                        <Button className = "save-btn" onClick = { e => this.validateForm(e, true) } label = "Save"/>
                        <Button className = "close-btn" onClick = { this.props.onFormCancel } icon = "times"/> 
                    </footer>
                </form>
            </Modal>
        )
    } 
}

const mapStateToProps = state => ({
    errors: state.errors
})
export default connect(mapStateToProps)(EditMovieForm);