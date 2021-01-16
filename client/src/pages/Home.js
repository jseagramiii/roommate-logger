import React, { useEffect, useContext } from 'react'
import LogList from './housefeed/LogList'
import AddButton from '../layout/AddButton'
import AddLogModal from './housefeed/AddLogModal'
import AddTenantModal from './housefeed/AddTenantModal'
import EditLogModal from './housefeed/EditLogModal'
import TenantListModal from './housefeed/TenantListModal'
import AuthContext from '../context/auth/authContext'

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
