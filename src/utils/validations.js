import { store } from '../App';

export const checkExistingMovie = (id) => {
    if (store.getState().moviesList.find(movie => movie.imdbID === id)) {
        return true
    }
}

export const formValidator = (input) => {

}
export const titleFormat = (title) => {
    let regex = /([a-zA-Z]|\s)/
    let formattedTitle = title.toLowerCase()
                            .split('')
                            .filter(char => regex.test(char))
                            .join('')
                            .split(' ')
                            .map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
    return formattedTitle;
}
