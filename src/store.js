import {createStore, combineReducers, applyMiddleware} from 'redux';

import MoviesReducer from './reducers/MoviesReducer';
import thunk from 'redux-thunk';

//console.log(VODItemsReducer);
const reducer = combineReducers({
    moviesData: MoviesReducer
});


let store = createStore(reducer, applyMiddleware(thunk));


export default store;