import React, { useReducer } from 'react'
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'
import { SET_ALERT, REMOVE_ALERT } from '../types'

const AlertState = (props) => {
  const initialState = []

  const [state, dispatch] = useReducer(AlertReducer, initialState)

  // Set Alert
  const setAlert = (message, type) => {
    const id = Math.floor(Math.random() * 9999)
    dispatch({
      type: SET_ALERT,
      payload: {
        message,
        type,
        id,
      },
    })
    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: id,
        }),
      5000
    )
  }

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  )
}

export default AlertState
