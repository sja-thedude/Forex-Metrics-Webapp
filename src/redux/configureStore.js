import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import forex from './reducers/forex';
import majors from './reducers/majors';
import cryptos from './reducers/cryptos';
import stocks from './reducers/stocks';
import efts from './reducers/efts';

const reducer = combineReducers({
  forex, majors, cryptos, stocks, efts,
});

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk, logger)),
);

export default store;
