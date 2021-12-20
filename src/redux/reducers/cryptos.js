/* eslint-disable no-case-declarations */
import { GET_CRYPTOS } from '../actions/actionTypes';

const cryptos = (state = [], action) => {
  switch (action.type) {
    case GET_CRYPTOS:
      return action.payload;

    default:
      return state;
  }
};

export default cryptos;
