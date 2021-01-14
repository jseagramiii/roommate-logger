import React, { useEffect, useContext } from 'react'
import LogList from './housefeed/LogList'
import AddButton from '../layout/AddButton'
import AddLogModal from './housefeed/AddLogModal'
import AddNameModal from './housefeed/AddNameModal'
import EditLogModal from './housefeed/EditLogModal'
import NameListModal from './housefeed/NameListModal'
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
      <AddNameModal />
      <EditLogModal />
      <NameListModal />
    </div>
  )
}

export default Home
