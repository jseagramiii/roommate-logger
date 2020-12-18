import React, { useReducer } from 'react'
import uuid from 'uuid'
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
  }
  const [state, dispatch] = useReducer(logReducer, initialState)

  // Add log

  // Delete log

  // Set current log

  // Clear current log

  // Update log

  // Filter logs

  // Clear filter

  return (
    <LogContext.Provider
      value={{
        logs: state.logs,
      }}
    >
      {props.children}
    </LogContext.Provider>
  )
}

export default LogState
