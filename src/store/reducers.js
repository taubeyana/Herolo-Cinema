import {ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE , GET_MOVIE, ERROR_MESSAGE } from '../store/actions'

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
    errorMessage: ''
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
        case ERROR_MESSAGE:
        return ({
            ...state, 
            errorMessage: action.payload
        })    
        case DELETE_MOVIE:
            return ({
                ...state,
                moviesList: state.moviesList.filter(movie => {
                   return movie.imdbID !== action.payload
                })
            })
        default:
            return state;
    }
}

export default rootReducer