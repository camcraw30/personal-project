import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';
import reviewsReducer from './reducers/reviewsReducer';

const rootReducer = combineReducers({
    userReducer,
    productReducer,
    reviewsReducer
});

export default createStore(rootReducer, applyMiddleware(promise));