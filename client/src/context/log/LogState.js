import React, { useReducer } from 'react'
import LogContext from './logContext'
import logReducer from './logReducer'
import axios from 'axios'
import {
  GET_LOGS,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_LOGS,
  UPDATE_LOG,
  LOG_ERROR,
} from '../types'

const LogState = (props) => {
  const initialState = {
    logs: null,
    current: null,
    error: null,
  }
  const [state, dispatch] = useReducer(logReducer, initialState)

  // Add log
  const addLog = async (log) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const res = await axios.post('/api/log', log, config)
      dispatch({ type: ADD_LOG, payload: res.data })
    } catch (error) {
      dispatch({ type: LOG_ERROR, payload: error.response.message })
    }
  }

  // Get logs
  const getLogs = async () => {
    try {
      const res = await axios.get('/api/log')
      dispatch({
        type: GET_LOGS,
        payload: res.data,
      })
    } catch (error) {
      dispatch({
        type: LOG_ERROR,
        payload: error.response.message,
      })
    }
  }

  // Update log
  const updateLog = async (log) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const res = await axios.put(`/api/log/${log.id}`, log, config)
      dispatch({
        type: UPDATE_LOG,
        payload: res.data,
      })
    } catch (error) {
      dispatch({
        type: LOG_ERROR,
        payload: error.response.message,
      })
    }
  }

  // Delete log
  const deleteLog = async (id) => {
    try {
      const res = await axios.delete(`/api/log/${id}`)
      dispatch({
        type: DELETE_LOG,
        payload: id,
      })
    } catch (error) {
      dispatch({
        type: LOG_ERROR,
        payload: error.response.message,
      })
    }
  }

  // Set current log
  const setCurrent = (log) => {
    dispatch({ type: SET_CURRENT, payload: log })
  }

  // Clear current log
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  return (
    <LogContext.Provider
      value={{
        current: state.current,
        logs: state.logs,
        error: state.error,
        getLogs,
        addLog,
        deleteLog,
        setCurrent,
        clearCurrent,
        updateLog,
      }}
    >
      {props.children}
    </LogContext.Provider>
  )
}

export default LogState
