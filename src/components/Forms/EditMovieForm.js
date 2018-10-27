import React, { Component }  from 'react';
import Input from '../../common/Input/Input';
import Modal from '../../common/Modal/Modal';

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
     render() {
        return (
            <Modal 
                modalOpen = { this.props.modalOpen } 
                modalClose = { this.props.modalClose }>
                <form onSubmit = { e => this.onFormSubmit(e) }>
                    <h1> Edit a Movie </h1>
                    <Input label = "Title"  defaultValue = { this.props.movie.Title } disabled inputRef = { this.title }  />
                    <Input label = "Year" defaultValue = { this.props.movie.Year }  inputRef = { this.year }/>
                    <Input label = "Genre" defaultValue = { this.props.movie.Genre } inputRef = { this.genre }/>
                    <Input label = "Runtime" defaultValue = { this.props.movie.Runtime } inputRef = { this.runtime }/>
                    <Input label = "Director" defaultValue = { this.props.movie.Director } inputRef = { this.director }/>
                    <Input label = "ID" defaultValue = { this.props.movie.imdbID } disabled/>
                    <button type = "submit">save</button>
                    <button onClick = { this.props.onFormCancel }>cancel</button>
                </form>
            </Modal>
            
        )
    } 
}
export default EditMovieForm;