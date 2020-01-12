/* libs */
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

/* middleware */
import { promiseMiddleware } from './middleware';

/* reducers */
import challenges from '../reducers/challenges';

const reducer = combineReducers({
  challenges
});

const middleware = applyMiddleware(promiseMiddleware, thunk);

const store = createStore(reducer, {}, composeWithDevTools(middleware));

// const persistConfig = {};

export default store;
