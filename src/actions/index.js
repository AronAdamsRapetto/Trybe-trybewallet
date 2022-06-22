import { LOGIN, FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAIL } from './actionTypes';

const apiRequest = () => ({
  type: FETCH_REQUEST,
});

const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: data,
});

const fetchFail = (error) => ({
  type: FETCH_FAIL,
  payload: error,
});

export const fetchCurrencyApi = () => async (dispatch) => {
  dispatch(apiRequest());
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const arrayData = Object.values(data).filter(({ codein }) => codein !== 'BRLT');
    dispatch(fetchSuccess(arrayData));
  } catch (error) {
    dispatch(fetchFail(error));
  }
};

export const userLogin = (email) => ({
  type: LOGIN,
  payload: email,
});
