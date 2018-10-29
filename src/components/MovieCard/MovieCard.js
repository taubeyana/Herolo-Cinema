import React, { Component }  from 'react';
import './MovieCard.css';
import Button from '../../common/Button/Button'
import defaultBackground from '../../img/defaultBackground.jpg';

class MovieCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let style = {
        }
        if (this.props.Poster) {
            style.backgroundImage= `url(${this.props.Poster})`
        } else {
            style.backgroundImage= `url(${defaultBackground})`
        }
        return (
            <div className = "movie-card" style = {style} >
                <div className='movie-details'>
                    <div className = "details-wrapper"> 
                        <label> Title: </label>
                        <span> { this.props.Title } </span>
                    </div>
                    <div className = "details-wrapper"> 
                        <label> Year: </label>
                        <span> { this.props.Year } </span>
                    </div>
                    <div className = "details-wrapper"> 
                        <label> Genre: </label>
                        <span> { this.props.Genre } </span>
                    </div>
                    <div className = "details-wrapper"> 
                        <label> Director: </label>
                        <span> { this.props.Director } </span>
                    </div>
                    <div className = "details-wrapper"> 
                        <label> Runtime: </label>
                        <span> { this.props.Runtime } </span>
                    </div>
                    <div className = "movie-card-buttons"> 
                        <Button onClick = { () => this.props.handleClickOnEdit(this.props.imdbID)} label = "Edit"/> 
                        <Button onClick = { () => this.props.onDeleteMovie(this.props.imdbID)} label = "Delete"/>
                    </div>
                </div>
            </div>
            )
    }
} 
    
export default MovieCard;
