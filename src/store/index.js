import {
  createStore,
  applyMiddleware
} from 'redux';

import { middleware } from '../navigations/rootNavigation';
import appReducer from '../reducers';


const store = createStore(
  appReducer,
  applyMiddleware(middleware),
);

export default store;