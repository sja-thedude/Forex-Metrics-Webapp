import { GET_FOREX } from '../actions/actionTypes';

const forex = (state = [], action) => {
  switch (action.type) {
    case GET_FOREX:
      return action.payload;

    default:
      return state;
  }
};

export default forex;
