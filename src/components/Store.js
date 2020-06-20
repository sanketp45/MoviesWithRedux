import {createStore,applyMiddleware,compose} from "redux";
import {combineReducers} from "redux"
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './App'
import reducer from './reducer';

const middleware=[thunk];
const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;
const rootreducer=combineReducers({
 movies:reducer
 }) 

const store=createStore(rootreducer,composeEnhancers(applyMiddleware(thunk)))       
export default store