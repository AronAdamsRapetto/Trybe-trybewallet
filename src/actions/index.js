import { LOGIN, FETCH_SUCCESS, FETCH_FAIL, ADD_EXPENSE } from './actionTypes';

const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: Object.keys(data),
});

const fetchFail = (error) => ({
  type: FETCH_FAIL,
  payload: error,
});

export const fetchCurrencyApi = () => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    dispatch(fetchSuccess(data));
  } catch (error) {
    dispatch(fetchFail(error));
  }
};

export const userLogin = (email) => ({
  type: LOGIN,
  payload: email,
});

const saveExpense = (expense, exchange) => ({
  type: ADD_EXPENSE,
  payload: { ...expense, exchangeRates: { ...exchange } },
});

export const fetchExpense = (expense) => async (dispatch) => {
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    dispatch(saveExpense(expense, data));
  } catch (error) {
    dispatch(fetchFail(error));
  }
};
