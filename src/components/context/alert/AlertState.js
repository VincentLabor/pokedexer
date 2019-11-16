import React from "react";
import alertContext from './alertContext';
import
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = props => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = msg => {
    dispatch({
      type: SET_ALERT,
      payload: {msg}
    });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 7000);
  };
  
  return <AlertContext.Provider
  value={{
      setAlert
  }}>
{props.children}
  </AlertContext.Provider>;
};

export default AlertState;
