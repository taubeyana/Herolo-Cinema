import React  from 'react';
import './MovieCard.css';

// 1.	 “id” (Auto generated, please don’t ask the user to fill it out)
// 2.	 "Title": "Dog Day Afternoon",
// 3.	 "Year": "1975",
// 4.	 "Runtime": "125 min",
// 5.	 "Genre": "Biography, Crime, Drama",
// 6.	 "Director": "Sidney Lumet",


const MovieCard = props => (
    <div className = "movie-card">
        <img src = { props.poster } alt = '{props.title}'/>
    </div>

    )
    
export default MovieCard;