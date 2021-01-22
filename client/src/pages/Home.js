import React, { useEffect, useContext } from 'react'
import LogList from './housefeed/log/LogList'
import AddButton from '../layout/AddButton'
import AddLogModal from './housefeed/log/AddLogModal'
import AddTenantModal from './housefeed/tenant/AddTenantModal'
import EditLogModal from './housefeed/log/EditLogModal'
import TenantListModal from './housefeed/tenant/TenantListModal'
import AuthContext from '../context/auth/authContext'
import TenantContext from '../context/tenant/tenantContext'

const Home = () => {
  const authContext = useContext(AuthContext)
  const { loadUser } = authContext
  useEffect(() => {
    loadUser()
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      <LogList />
      <AddButton />
      <AddLogModal />
      <AddTenantModal />
      <EditLogModal />
      <TenantListModal />
    </div>
  )
}

export default Home
