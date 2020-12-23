import React, { useReducer } from 'react'
import { v4 as uuid } from 'uuid'
import logContext from './logContext'
import logReducer from './logReducer'
import {
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  FILTER_LOG,
  CLEAR_FILTER,
} from '../types'
import LogContext from './logContext'

const LogState = (props) => {
  const initialState = {
    logs: [
      {
        id: 1,
        name: 'jimmy',
        header: 'hello guys.  Header',
        content: 'hi hi how ya doing this is state. jimmy Content',
        completed: true,
      },
      {
        id: 2,
        name: 'emily',
        header: 'hello guys. Emily Header',
        content: 'hi hi how ya doing this is state.  Emil Content',
        completed: false,
      },
      {
        id: 3,
        name: 'Tony',
        header: 'hello guys. Tony Header',
        content: 'hi hi how ya doing this is state.  Tony Content',
        completed: true,
      },
    ],
    current: null,
  }
  const [state, dispatch] = useReducer(logReducer, initialState)

  // Add log
  const addLog = (log) => {
    log.id = Math.floor(Math.random() * 99999)
    dispatch({ type: ADD_LOG, payload: log })
  }

  // Delete log
  const deleteLog = (id) => {
    dispatch({ type: DELETE_LOG, payload: id })
  }

  // Set current log
  const setCurrent = (log) => {
    dispatch({ type: SET_CURRENT, payload: log })
  }

  // Clear current log
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }
  // Update log

  // Filter logs

  // Clear filter

  return (
    <LogContext.Provider
      value={{
        current: state.current,
        logs: state.logs,
        addLog,
        deleteLog,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </LogContext.Provider>
  )
}

export default LogState
