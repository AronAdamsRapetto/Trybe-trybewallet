import {
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_EXPENSE,
  REMOVE_EXPENSE,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  isFetching: true,
  error: '',
};

const RADIX_GENERATE_ID = 36;

// Idéia para gerar um id aleatório retirada do link abaixo:
// https://codigofonte.org/gerando-id-aleatorio-em-javascript/
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
        id: Math.floor(Date.now() * Math.random()).toString(RADIX_GENERATE_ID),
      }],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload),
    };
  default:
    return state;
  }
};

export default wallet;
