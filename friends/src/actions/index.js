import axios from "axios";

export const AUTH_START = "LOGIN_START";
export const AUTH_SUCCESS = "AUTH_SUCCESS";

export const login = creds => dispatch => {
  dispatch({ type: AUTH_START });
  return axios.post("http://localhost:5000/api/login", creds).then(res => {
    localStorage.setItem("token", res.data.payload);
    dispatch({ type: AUTH_SUCCESS, payload: res.data.payload });
  });
};
