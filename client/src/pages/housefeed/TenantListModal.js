import React, { useState, useEffect, useContext } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import TenantContext from '../../context/tenant/tenantContext'
import TenantItem from './TenantItem'
import Loader from '../../layout/Loader'

const TenantListModal = () => {
  const tenantContext = useContext(TenantContext)
  const { tenants, tenant, loading, getTenants } = tenantContext

  useEffect(() => {
    M.AutoInit()
    console.log('get tenants')
    getTenants()
    // eslint-disable-next-line
  }, [])

  return (
    <div id='name-list-modal' className='modal'>
      {tenants !== null && !loading ? (
        <div className='modal-content'>
          <h4>List of Current House Members</h4>
          <ul className='collection'>
            {tenants.length === 0 ? (
              <p className='center'>
                <em>No tenants listed</em>
              </p>
            ) : (
              tenants.map((tenant) => {
                return <TenantItem tenant={tenant} key={tenant._id} />
              })
            )}
          </ul>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default TenantListModal
