import { GET_MAJORS } from '../actions/actionTypes';

const majors = (state = [], action) => {
  switch (action.type) {
    case GET_MAJORS:
      return action.payload.filter((majors) => majors.ticker === 'EUR/USD'
      || majors.ticker === 'GBP/USD'
      || majors.ticker === 'USD/JPY'
      || majors.ticker === 'USD/CAD'
      || majors.ticker === 'USD/CHF'
      || majors.ticker === 'AUD/USD'
      || majors.ticker === 'NZD/USD');

    default:
      return state;
  }
};

export default majors;
