import { checkExistingMovie } from '../utils/validations'
import axios from 'axios';
export const ADD_MOVIE = "ADD_MOVIE";
export const GET_MOVIE = "GET_MOVIE";
export const EDIT_MOVIE = "EDIT_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const SET_ERRORS = "SET_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const addMovie = (payload) => {
    let error = ''
    if ( checkExistingMovie(payload.Title) === true ) {
       return dispatch => dispatch(errorMessage(`Movie ${payload.Title} already exist.`)) 
    } else {
        return {
            type: ADD_MOVIE,
            movie: {
                Title: payload.Title,
                Poster: payload.Poster,
                Year: payload.Year,
                Runtime: payload.Runtime,
                Genre: payload.Genre,
                Director: payload.Director,
                imdbID: payload.imdbID
            },
            error: error
        }
    }
}

export const getMovie = (payload) => ({
    type: GET_MOVIE,
    payload
})

export const editMovie = (payload) => ({
    type: EDIT_MOVIE,
    payload
})
export const deleteMovie = (payload) => ({
    type: DELETE_MOVIE,
    payload
})

export const errorMessage = (payload) => ({
    type: ERROR_MESSAGE,
    payload
})

export const setErrors = payload => ({
    type: SET_ERRORS,
    payload
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
    
})
export const fetchMoviesList = () => {
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
    return (dispatch) => {
        moviesInitialList.forEach(title => {
            axios.get(`https://www.omdbapi.com/?t=${title}&apikey=33a73e97`)
            .then(data => {
                dispatch(addMovie(data.data))
            })
            .catch(err => console.log(err))
        });
    }
}

export const fetchMovie = (title) => {
    return dispatch => {
            axios.get(`https://www.omdbapi.com/?t=${title}&apikey=33a73e97`)
            .then(data => {
                if (data.data.Response === 'True') {
                    dispatch(getMovie(data.data))
                } if ( checkExistingMovie(data.data.imdbID) === true ) {
                    return dispatch => dispatch(errorMessage(`Movie ${data.data.Title} already exist.`)) 
                 }
                 else {
                    dispatch(errorMessage(data.data.Error))
                }
            })
            .catch(err => console.log(err))
    }
}