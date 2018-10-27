import React, { Component }  from 'react';
import './MovieCard.css';
import FlipCard from '../../common/FlipCard/FlipCard';

class MovieCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className = "movie-card">
                    <img className = "front" src = { this.props.Poster } alt = '{this.props.title}'/>
                    <div className='back'>
                        <p> Title: { this.props.Title } </p>
                        <p> Year: { this.props.Year } </p>
                        <p> Genre: { this.props.Genre } </p>
                        <p> Director: { this.props.Director } </p>
                        <p> Runtime: { this.props.Runtime } </p>
                        <button onClick = { () => this.props.handleClickOnEdit(this.props.imdbID)} > EDIT </button>
                        <button onClick = { () => this.props.onDeleteMovie(this.props.imdbID)} > DELETE </button>
                    </div>
                </div>
        
            )
    }
} 
    
export default MovieCard;
// const MovieCard = this.props => (

//     <div className = "movie-card">
//             <img className = "front" src = { this.props.Poster } alt = '{this.props.title}'/>
//             <div className='back'>
//                 <p> Title: { this.props.Title } </p>
//                 <p> Year: { this.props.Year } </p>
//                 <p> Genre: { this.props.Genre } </p>
//                 <p> Director: { this.props.Director } </p>
//                 <p> Runtime: { this.props.Runtime } </p>
//                 <button onClick = { this.props.handleClick} > EDIT</button>
//             </div>
//         </div>

//     )
    
// export default MovieCard;