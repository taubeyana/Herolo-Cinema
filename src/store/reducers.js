import {ADD_MOVIE, EDIT_MOVIE } from '../store/actions'

const initialState = {
    moviesList: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return ({
                ...state, 
                moviesList: [
                    ...state.moviesList, 
                    action.movie
                ]
            })
        case EDIT_MOVIE:
            console.log(action.payload)
            return ({
                ...state,
                moviesList: state.moviesList.map(movie => {
                    if (movie.imdbID === action.payload.imdbID) return action.payload
                    else return movie
                })
            })
        default:
            return state;
    }
}

export default rootReducer