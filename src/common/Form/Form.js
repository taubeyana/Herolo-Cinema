import React, { Component, Fragment }  from 'react';
import { connect } from 'react-redux';
import { fetchMovie, addMovie } from '../../store/actions'
import './Form.css';
import Input from '../Input/Input';

class Form extends Component {
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
        if (this.props.formType === 'add') {
            this.props.dispatch(addMovie(this.props.movieInfo))
            this.props.onFormCancel()
        } else {
            let movie = {
                Title: this.title.current.value,
                Year: this.year.current.value,
                Genre: this.genre.current.value,
                Runtime: this.runtime.current.value,
                Director: this.director.current.value,
                imdbID: this.props.movie.imdbID,
                Poster: this.props.movie.Poster
            }
            this.props.handleChange(movie)
        }
    }
    check = (e) => {
        e.preventDefault()
        this.props.dispatch(fetchMovie(this.title.current.value))
    }
    renderEditForm = () => {
        return (
        <Fragment>
            <Input label = "Title"  defaultValue = { this.props.movie.Title } inputRef = { this.title }  />
            <Input label = "Year" defaultValue = { this.props.movie.Year }  inputRef = { this.year }/>
            <Input label = "Genre" defaultValue = { this.props.movie.Genre } inputRef = { this.genre }/>
            <Input label = "Runtime" defaultValue = { this.props.movie.Runtime } inputRef = { this.runtime }/>
            <Input label = "Director" defaultValue = { this.props.movie.Director } inputRef = { this.director }/>
            <Input label = "ID" defaultValue = { this.props.movie.imdbID } disabled/>
        </Fragment>)
    }
    renderAddForm = () => {
        return (
        <Fragment>
            <Input handleChange= {(e) => this.check(e) } label = "Title" defaultValue = { this.props.movieInfo.Title } inputRef = { this.title } />
            <Input label = "Year" defaultValue = { this.props.movieInfo.Year } disabled  inputRef = { this.year }/>
            <Input label = "Genre" defaultValue = { this.props.movieInfo.Genre } disabled  inputRef = { this.genre }/>
            <Input label = "Runtime" defaultValue = { this.props.movieInfo.Runtime } disabled  inputRef = { this.runtime }/>
            <Input label = "Director" defaultValue = { this.props.movieInfo.Director }  disabled  inputRef = { this.director }/>
            <Input label = "ID"  defaultValue = { this.props.movieInfo.imdbID } disabled/>
        </Fragment>)
    }
    render() {
        let formHeader;
        switch (this.props.formType) {
            case 'edit':
                formHeader = "Edit a Movie"
                break;
            case 'add':
                formHeader = "Add a Movie"
                break;
            default:
                break;
        }
        return (
            <form onSubmit = { e => this.onFormSubmit(e) }>
                <h1> { formHeader } </h1>
                { this.props.formType === "edit" ? this.renderEditForm() : null } 
                { this.props.formType === "add" ? this.renderAddForm() : null } 
                <button type = "submit">save</button>
                <button onClick = { e => this.check(e) }> check </button> 
                <button onClick = { this.props.onFormCancel }>cancel</button>
            </form>
        )
    } 
}
const mapStateToProps = state => ({
    movieInfo: state.movieInfo,
})
export default connect(mapStateToProps)(Form);