import LOGIN from './actionTypes';

const userLogin = (email) => ({
  type: LOGIN,
  payload: email,
});

export default userLogin;
