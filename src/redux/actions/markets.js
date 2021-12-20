import * as api from '../../api/api';
import { cryptos } from '../../components/data';
import {
  GET_FOREX, GET_MAJORS, GET_CRYPTOS, GET_STOCKS, GET_EFTS,
} from './actionTypes';

export const getForex = () => async (dispatch) => {
  try {
    const data = await api.fetchFxPrices();

    dispatch({ type: GET_FOREX, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getMajors = (payload) => ({
  type: GET_MAJORS,
  payload,
});

export const getCryptos = () => (dispatch) => {
  try {
    const data = [];

    cryptos.forEach(async (crypto) => {
      const { symbol } = crypto;
      const cryptoData = await api.fetchCryptos(symbol);

      data.push(cryptoData[0]);
    });

    dispatch({ type: GET_CRYPTOS, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getStocks = () => async (dispatch) => {
  try {
    const data = await api.fetchStocks();

    dispatch({ type: GET_STOCKS, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getEFTs = () => async (dispatch) => {
  try {
    const data = await api.fetchEFTs();

    dispatch({ type: GET_EFTS, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};
