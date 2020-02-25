import { createStore, combineReducers, applyMiddleware } from 'redux';
import favorites from './reducers/favorites';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  favorites,
});

const store = () => createStore(reducers, applyMiddleware(thunk));

export default store;