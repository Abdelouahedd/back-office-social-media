import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import AuthReducer from "../reducers/authentification";
import thunk from 'redux-thunk';
import UsersReducer from "../reducers/users";


const rootReducers = combineReducers({ auth: AuthReducer, users: UsersReducer });

export default createStore(rootReducers,
    compose(
        applyMiddleware(logger, thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);