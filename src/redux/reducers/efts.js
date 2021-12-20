import { GET_EFTS } from '../actions/actionTypes';

const efts = (state = [], action) => {
  switch (action.type) {
    case GET_EFTS:
      return action.payload;

    default:
      return state;
  }
};

export default efts;
