import { store } from '../App';

export const checkExistingMovie = (id) => {
    if (store.getState().moviesList.find(movie => movie.imdbID === id)) {
        return true
    }
}

export const formValidator = (values) => {
    let yearChecker = /(\b(19|[2-9][0-9])\d{2})/
    let runtimeUserChecker = /^\d{3}$/
    let runtimeIMDBChecker = /^\d{3}\smin$/

    const errors = {}
    if (!values.title) {
        errors.title = 'Required'
    } 
}
export const titleFormat = (title) => {
    if (!title) {
        return;
    } else {
        let regex = /([a-z]|\s)/i
        let formattedTitle = title.toLowerCase()
                                .split('')
                                .filter(char => regex.test(char))
                                .join('')
                                .split(' ')
                                .map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
        return formattedTitle;
    }
}

// !!!"Year" de 1920    (\b(19|[2-9][0-9])\d{2})
// "Genre" d Adventure, Drama [a-z],?\s? /i
// !!!"Runtime" 207 min    ^\d{3}\smin$   ||   ^\d{3}$
// "Director Akira Kurosawa [a-z],?\s? /i  || [a-z],?\s?\(?-?\)?
// "ID"  
// title Seven  Director: Chris Wedge, Carlos Saldanha(co-director)  [a-z],?\s? /i