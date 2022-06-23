import { LOGIN, FETCH_SUCCESS, FETCH_FAIL, ADD_EXPENSE } from './actionTypes';

const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  currenciesType: Object.keys(data),
  currenciesInfo: { ...data },
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

export const saveExpense = (expense) => ({
  type: ADD_EXPENSE,
  payload: { ...expense },
});
