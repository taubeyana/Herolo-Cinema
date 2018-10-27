import React, { Component }  from 'react';
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
        let editedMovie = {
            Title: this.title.current.value,
            Year: this.year.current.value,
            Genre: this.genre.current.value,
            Runtime: this.runtime.current.value,
            Director: this.director.current.value,
            imdbID: this.props.movie.imdbID,
            Poster: this.props.movie.Poster
        }
        this.props.handleChange(editedMovie)
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
                <Input handleChange = { this.onInputChange } label = "Title"  defaultValue = { this.props.movie.Title } inputRef = { this.title }  />
                <Input handleChange = { this.onInputChange } label = "Year" defaultValue = { this.props.movie.Year }  inputRef = { this.year }/>
                <Input handleChange = { this.onInputChange } label = "Genre" defaultValue = { this.props.movie.Genre } inputRef = { this.genre }/>
                <Input handleChange = { this.onInputChange } label = "Runtime" defaultValue = { this.props.movie.Runtime } inputRef = { this.runtime }/>
                <Input handleChange = { this.onInputChange } label = "Director" defaultValue = { this.props.movie.Director } inputRef = { this.director }/>
                <Input label = "ID" defaultValue = { this.props.movie.imdbID } disabled/>
                <button type = "submit">save</button>
                <button onClick = { this.props.onFormCancel }>cancel</button>
            </form>
        )
        
    } 
}
 
export default Form;