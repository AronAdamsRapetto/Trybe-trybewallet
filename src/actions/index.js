import { LOGIN, FETCH_SUCCESS, FETCH_FAIL } from './actionTypes';

const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: data,
});

const fetchFail = (error) => ({
  type: FETCH_FAIL,
  payload: error,
});

export const fetchCurrencyApi = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const arrayData = Object.keys(data).filter((currency) => currency !== 'USDT');
    dispatch(fetchSuccess(arrayData));
  } catch (error) {
    dispatch(fetchFail(error));
  }
};

export const userLogin = (email) => ({
  type: LOGIN,
  payload: email,
});
