import React, { useReducer } from 'react'
import TenantContext from './tenantContext'
import tenantReducer from './tenantReducer'
import axios from 'axios'
import { GET_TENANTS, ADD_TENANT, DELETE_TENANT, TENANT_ERROR } from '../types'

const TenantState = (props) => {
  const initialState = {
    tenants: null,
    error: null,
  }
  const [state, dispatch] = useReducer(tenantReducer, initialState)

  // Add tenant
  const addTenant = async (tenant) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    try {
      const res = await axios.post('/api/tenant', tenant, config)
      dispatch({ type: ADD_TENANT, payload: res.data })
    } catch (error) {
      dispatch({ type: TENANT_ERROR, payload: error.response.message })
    }
  }

  // Get tenants
  const getTenants = async () => {
    try {
      const res = await axios.get('/api/tenant')
      dispatch({
        type: GET_TENANTS,
        payload: res.data,
      })
    } catch (error) {
      dispatch({
        type: TENANT_ERROR,
        payload: error.response.message,
      })
    }
  }

  // Delete tenant
  const deleteTenant = async (id) => {
    try {
      const res = await axios.delete(`/api/tenant/${id}`)
      dispatch({
        type: DELETE_TENANT,
        payload: id,
      })
    } catch (error) {
      dispatch({
        type: TENANT_ERROR,
        payload: error.response.message,
      })
    }
  }

  return (
    <TenantContext.Provider
      value={{
        tenants: state.tenants,
        error: state.error,
        getTenants,
        addTenant,
        deleteTenant,
      }}
    >
      {props.children}
    </TenantContext.Provider>
  )
}

export default TenantState
