import {AUTH_START, AUTH_SUCCESS } from '../actions';

const initialState = {
  attemptingLogin: false,
  loggedIn: true,
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    default: 
      return state
  }
}