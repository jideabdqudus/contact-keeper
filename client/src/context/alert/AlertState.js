import React, { useReducer } from "react";
import AlertContext from "./AlertContext";
import alertReducer from "./AlertReducer";
import {
 SET_ALERT,
 REMOVE_ALERT
} from "../Types";

const AlertState = (props) => {
  const initialState = []

  const [state, dispatch] = useReducer(alertReducer, initialState);

  //Set Alert
    const setAlert=(msg, type, timeout = 5000)=>{
        const id = Date.now()
        dispatch({
            type: SET_ALERT,
            payload:{msg, type, id}
        })

        setTimeout(()=> dispatch({type: REMOVE_ALERT, payload: id}), timeout)
    }

  //Remove Alert

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
