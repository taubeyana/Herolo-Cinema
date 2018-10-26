import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const loggerMiddleware = createLogger();

const configureStore = () => {
    return createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            )
        )
    )
}
export default configureStore;