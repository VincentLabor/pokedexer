import React, { useReducer } from "react";
import { SET_ALERT, REMOVE_ALERT } from "../types";
import alertReducer from "./alertReducer";
import AlertContext from "./alertContext";

const AlertState = props => {
  const initialState = {
    alert: null
  };
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg) => {
    dispatch({
      type: SET_ALERT,
      payload: msg 
    });

    console.log(msg);

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 7000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert, //This is the entire state. This will replace the null.
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
