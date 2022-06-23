import { FETCH_SUCCESS, FETCH_FAIL } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  isFetching: true,
  error: '',
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_SUCCESS:
    return { ...state, currencies: [...action.payload], isFetching: false };
  case FETCH_FAIL:
    return { ...state, error: action.payload, isFetching: false };
  default:
    return state;
  }
};

export default wallet;
