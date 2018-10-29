import React, { Component }  from 'react';
import uniqid from 'uniqid';
import './Forms.css'
import { connect } from 'react-redux';
import { titleFormat } from '../../utils/validations'
import Input from '../../common/Input/Input';
import Modal from '../../common/Modal/Modal';
import Button from '../../common/Button/Button';
import { formValidator } from '../../utils/validations';
import { setErrors } from '../../store/actions';

class AddMovieForm extends Component {
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
        this.props.handleFormSubmit(this.props.movieInfo)
        if (this.props.error === undefined) {
            this.props.onFormCancel()
        }
    }
    titleFormat = (e) => {
        e.preventDefault()
        this.title.current.value = titleFormat(this.title.current.value)
    }

    validateForm = (e,bool) => {
        e.preventDefault()
            const values = {
                Title: this.title.current.value,
                Year: this.year.current.value,
                Genre: this.genre.current.value,
                Runtime: this.runtime.current.value,
                Director: this.director.current.value
            }
            let errors = formValidator(values)
            this.props.dispatch(setErrors(errors))
            
            if (Object.keys(errors).length === 0){
                values.Title = titleFormat(this.title.current.value)
                values.imdbID = uniqid()
                this.props.handleFormSubmit(values)
                this.props.onFormCancel()
            } 
    }

    render() {
        return (
            <Modal className = "form-modal"
                modalOpen = { this.props.modalOpen } 
                modalClose = { this.props.modalClose }>
                <form>
                    <h1> Add a Movie </h1>
                    <div className = "form-input-fields">
                        <Input onBlur = { e => this.titleFormat(e) } label = "Title" inputRef = { this.title } />
                        <span className = "error-message"> { this.props.errors.Title } </span>
                        <Input label = "Year"  inputRef = { this.year }/>
                        <span className = "error-message"> { this.props.errors.Year } </span>
                        <Input label = "Genre"   inputRef = { this.genre }/>
                        <span className = "error-message"> { this.props.errors.Genre } </span>
                        <Input label = "Runtime"  inputRef = { this.runtime }/>
                        <span className = "error-message"> { this.props.errors.Runtime } </span>
                        <Input label = "Director"  inputRef = { this.director }/>
                        <span className = "error-message"> { this.props.errors.Director } </span>
                        <Input label = "ID"  disabled/>
                    </div>
                    <footer className = "form-buttons"> 
                        <Button className = "save-btn" onClick = { e => this.validateForm(e) } label = "Save"/> 
                        <Button className = "close-btn" onClick = { this.props.onFormCancel } icon = "times"/> 
                    </footer>
                </form>
            </Modal>
        )
    } 
}
const mapStateToProps = state => ({
    movieInfo: state.movieInfo,
    errors: state.errors
})
export default connect(mapStateToProps)(AddMovieForm);