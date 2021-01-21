import { GET_TENANTS, ADD_TENANT, DELETE_TENANT, TENANT_ERROR } from '../types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case GET_TENANTS:
      return {
        ...state,
        tenants: action.payload,
        loading: false,
      }
    case ADD_TENANT:
      return {
        ...state,
        tenants: [action.payload, ...state.tenants],
        loading: false,
      }
    case DELETE_TENANT:
      return {
        ...state,
        tenants: state.tenants.filter((tenant) => {
          return tenant._id !== action.payload
        }),
        loading: false,
      }
    case TENANT_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
