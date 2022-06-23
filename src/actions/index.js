import fetchCurrency from '../service/fetch';
import {
  LOGIN,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  INIT_EDIT_EXPENSE,
  END_EDIT_EXPENSE,
} from './actionTypes';

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
    const response = await fetchCurrency();
    dispatch(fetchSuccess(response));
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
    const response = await fetchCurrency();
    dispatch(saveExpense(expense, response));
  } catch (error) {
    dispatch(fetchFail(error));
  }
};

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  payload: id,
});

export const editExpense = (id) => ({
  type: INIT_EDIT_EXPENSE,
  payload: id,
});

export const saveEditExpense = (expense) => ({
  type: END_EDIT_EXPENSE,
  payload: { ...expense },
});
