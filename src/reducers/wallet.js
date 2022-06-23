import {
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  INIT_EDIT_EXPENSE,
  END_EDIT_EXPENSE,
} from '../actions/actionTypes';

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
      }],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload),
    };
  case INIT_EDIT_EXPENSE:
    return {
      ...state,
      editor: true,
      idToEdit: action.payload,
    };
  case END_EDIT_EXPENSE:
    return {
      ...state,
      editor: false,
      expenses: [
        ...state.expenses.slice(0, state.idToEdit),
        {
          ...action.payload,
          id: state.idToEdit,
          exchangeRates: { ...state.expenses[state.idToEdit].exchangeRates },
        },
        ...state.expenses.slice(state.idToEdit + 1, state.expenses.length),
      ],
      idToEdit: 0,
    };
  default:
    return state;
  }
};

export default wallet;
