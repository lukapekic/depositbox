import {
  combineReducers,
  compose,
  applyMiddleware,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';

import { depositBoxReducer } from './reducers';

const middlewareEnhancer = applyMiddleware(thunk);
const devToolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
const composedEnhancers = compose(
  middlewareEnhancer,
  devToolsEnhancer,
);

const reducers = combineReducers({
  deposit: depositBoxReducer,
});

const store = createStore(reducers, composedEnhancers);

export default store;
