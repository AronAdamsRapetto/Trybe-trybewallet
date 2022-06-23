import { FETCH_SUCCESS, FETCH_FAIL, ADD_EXPENSE } from '../actions/actionTypes';

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
    return {
      ...state,
      currencies: [...action.payload],
      isFetching: false,
    };
  case FETCH_FAIL:
    return { ...state, error: action.payload, isFetching: false };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, {
        ...action.payload,
        id: state.expenses.length,
      }],
    };
  default:
    return state;
  }
};

export default wallet;
