import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import LogContext from '../../context/log/logContext'
import LogItem from './LogItem'
import Loader from '../../layout/Loader'
import AddButton from '../../layout/AddButton'
import AddLogModal from './AddLogModal'
import EditLogModal from './EditLogModal'
import AddNameModal from './AddNameModal'

const LogList = () => {
  //  const [logList, setLogList] = useState([])
  //  const [loading, setLoading] = useState(false)
  const logContext = useContext(LogContext)
  const { logs } = logContext

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
          logs.map((log) => <LogItem log={log} key={log.id} />)
        )}
      </ul>
      <AddButton />
      <AddLogModal />
      <AddNameModal />
      <EditLogModal />
    </div>
  )
}

export default LogList
