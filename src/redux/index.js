import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import formReducer from './form';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  form: formReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
