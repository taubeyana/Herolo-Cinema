import React, { Component }  from 'react';
import './MovieCard.css';
import Button from '../../common/Button/Button'

class MovieCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let style = {
            backgroundImage: `url(${this.props.Poster})`
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
// class MovieCard extends Component {
//     constructor(props) {
//         super(props)
//     }
// <img src = { this.props.Poster } alt = '{this.props.title}'/>
//     render() {
//         return (
//             <div className = "movie-card">
//                     <img className = "front" src = { this.props.Poster } alt = '{this.props.title}'/>
//                     <div className='back'>
//                         <p> Title: { this.props.Title } </p>
//                         <p> Year: { this.props.Year } </p>
//                         <p> Genre: { this.props.Genre } </p>
//                         <p> Director: { this.props.Director } </p>
//                         <p> Runtime: { this.props.Runtime } </p>
//                         <Button onClick = { () => this.props.handleClickOnEdit(this.props.imdbID)} > EDIT </Button>
//                         <Button onClick = { () => this.props.onDeleteMovie(this.props.imdbID)} > DELETE </Button>
//                     </div>
//                 </div>
        
//             )
//     }
// } 
    
// export default MovieCard;