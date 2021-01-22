import React, { useContext, useEffect } from 'react'
import TenantContext from '../../../context/tenant/tenantContext'

const TenantSelect = () => {
  const tenantContext = useContext(TenantContext)
  const { getTenants, tenants, loading } = tenantContext

  useEffect(() => {
    getTenants()
    // eslint-disable-next-line
  }, [])

  return (
    !loading &&
    tenants !== null &&
    tenants.map((tenant) => (
      <option key={tenant.id} value={`${tenant.firstName} ${tenant.lastName}`}>
        {tenant.firstName} {tenant.lastName}
      </option>
    ))
  )
}

export default TenantSelect
