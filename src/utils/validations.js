import { store } from '../App';
import validator from 'validator';

export const checkExistingMovie = (title) => {
    if (store.getState().moviesList.find(movie => movie.Title === title)) {
        return true
    }
}

export const formValidator = (values) => {
    let yearChecker = /(\b(19|[2-9][0-9])\d{2})$/;
    let errors = {}
    if (validator.isEmpty(values.Title)) {
        errors.Title = 'Required'
    } else if (!validator.isAlpha(validator.blacklist(values.Title, (', .')))) {
        errors.Title = 'Title must contain only letters'
    } else if  ( checkExistingMovie(values.Title) === true ) {
        errors.Title = `Movie ${values.Title} already exist.`
    }
    if (validator.isEmpty(values.Year)) {
        errors.Year = 'Required'
    } else if (!yearChecker.test(values.Year)) {
        errors.Year = 'This year should after 1900'
    } if (validator.isEmpty(values.Genre)) {
        errors.Genre = 'Required'
    } else if (!validator.isAlpha(validator.blacklist(values.Genre, (', .')))) {
        errors.Genre = 'Genre must contain only letters'
    } if (validator.isEmpty(values.Runtime)) {
        errors.Runtime = 'Required'
    } else if (!validator.isInt(values.Runtime)) {
        errors.Runtime = 'Please provide a runtime in minutes'
    } if (validator.isEmpty(values.Director)) {
        errors.Director = 'Required'
    } else if (!validator.isAlpha(validator.blacklist(values.Director, (', .')))) {
        errors.Director = 'Director must contain only letters'
    } 

    return errors
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

