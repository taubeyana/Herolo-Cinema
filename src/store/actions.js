import axios from 'axios';
// export const GET_MOVIES_LIST = "FETCH_MOVIES_LIST";
export const ADD_MOVIE = "ADD_MOVIE";
export const EDIT_MOVIE = "EDIT_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";


export const addMovie = (payload) => ({
    type: ADD_MOVIE,
    movie: {
        Title: payload.Title,
        Poster: payload.Poster,
        Year: payload.Year,
        Runtime: payload.Runtime,
        Genre: payload.Genre,
        Director: payload.Director,
        imdbID: payload.imdbID
    }
})

export const editMovie = (payload) => ({
    type: EDIT_MOVIE,
    payload
})
export const deleteMovie = (payload) => ({
    type: DELETE_MOVIE,
    payload
})

export const fetchMoviesList = (title) => {
    let moviesInitialList = [
        "se7en",
        "The Silence of the Lambs",
        "The Game",
        "The Whole Nine Yards",
        "The Experiment",
        "The Girl with the Dragon Tattoo",
        "Ice Age",
        "House",
        "The Green Mile",
        "American History X",
        "Breaking Bad",
        "Limitless",
        "Braveheart",
        "The Shawshank Redemption",
        "Unthinkable",
        "Pulp Fiction",
        "The Dictator",
        "Django Unchained",
        "Crazy, Stupid, Love.",
        "Hard Candy"
    ]
    if (title) moviesInitialList.push(title) // change this after validation!!!!!!!!
    return dispatch => {
        moviesInitialList.forEach(title => {
            axios.get(`http://www.omdbapi.com/?t=${title}&apikey=33a73e97`)
            .then(data => dispatch(addMovie(data.data)))
            .catch(err => console.log(err))
        });
    }
}