import {ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE , GET_MOVIE, SET_ERRORS, CLEAR_ERRORS } from '../store/actions'

const initialState = {
    moviesList: [],
    movieInfo: {
        Title: '',
        Poster: '',
        Year: '',
        Runtime: '',
        Genre: '',
        Director: '',
        imdbID: ''
    },
    errors: {
        title: '',
        year: '',
        genre: '',
        runtime: '',
        director: '',
        existingMovie: ''
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return ({
                ...state, 
                moviesList: [
                    action.movie,
                    ...state.moviesList 
                ],
                errorMessage: action.error
            })
        case GET_MOVIE:
            return ({
                ...state, 
                movieInfo: action.payload
            })
        case EDIT_MOVIE:
            return ({
                ...state,
                moviesList: state.moviesList.map(movie => {
                    if (movie.imdbID === action.payload.imdbID) return action.payload
                    else return movie
                })
            })
        case DELETE_MOVIE:
            return ({
                ...state,
                moviesList: state.moviesList.filter(movie => {
                   return movie.imdbID !== action.payload
                })
            })
        case SET_ERRORS:
            return {
                ...state,
                errors: {...action.payload}
            }
        case CLEAR_ERRORS: 
            return {
                ...state,
                errors: {}
            }    
        default:
            return state;
    }
}

export default rootReducer