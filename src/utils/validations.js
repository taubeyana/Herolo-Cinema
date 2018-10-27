import { store } from '../App';

export const checkExistingMovie = (id) => {
    if (store.getState().moviesList.find(movie => movie.imdbID === id)) {
        return true
    }
}