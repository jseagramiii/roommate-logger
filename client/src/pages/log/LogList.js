import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import LogContext from '../../context/log/logContext'
import LogItem from './LogItem'
import Loader from '../../layout/Loader'
import AddButton from '../../layout/AddButton'
import AddLogModal from './AddLogModal'
import EditLogModal from './EditLogModal'
import AddNameModal from './AddNameModal'
import NameListModal from './NameListModal'
import AuthContext from '../../context/auth/authContext'
import M from 'materialize-css/dist/js/materialize.min.js'

const LogList = () => {
  const authContext = useContext(AuthContext)
  const logContext = useContext(LogContext)
  const { logs, setCurrent, current } = logContext
  const { loadUser } = authContext

  useEffect(() => {
    M.AutoInit()
    loadUser()
    // eslint-disable-next-line
  }, [])

  //  useEffect(() => {
  //    setLoading(true)

  //    const getLogList = async () => {
  //      setLoading(true)

  //      const res = await axios.get('http://localhost:5000/api/log')

  //      setLoading(false)
  //      setLogList(res.data)
  //    }
  //    getLogList() // eslint-disable-next-line
  //  }, [])

  //  if (loading) {
  //    return { Loader }
  //  }

  return (
    <div>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>House Feed</h4>
        </li>
        {logs.length === 0 ? (
          <p className='center'>
            <em>No activity</em>
          </p>
        ) : (
          logs.map((log) => (
            <LogItem current={current} log={log} key={log.id} />
          ))
        )}
      </ul>
      <AddButton />
      <AddLogModal />
      <AddNameModal />
      <EditLogModal />
      <NameListModal />
    </div>
  )
}

export default LogList
