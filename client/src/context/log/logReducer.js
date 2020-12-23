import {
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
  FILTER_LOG,
  CLEAR_FILTER,
} from '../types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
      }
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => {
          return log.id !== action.payload
        }),
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      }

    default:
      return state
  }
}
