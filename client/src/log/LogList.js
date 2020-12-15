import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LogItem from './LogItem'
import Loader from '../layout/Loader'

const LogList = () => {
  const [logList, setLogList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const getLogList = async () => {
      setLoading(true)

      const res = await axios.get('http://localhost:5000/api/log')

      setLoading(false)
      setLogList(res.data)
    }
    getLogList() // eslint-disable-next-line
  }, [])

  if (loading) {
    return { Loader }
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>Activity Log</h4>
      </li>
      {!loading && logList.length === 0 ? (
        <p className='center'>
          <em>No activity</em>
        </p>
      ) : (
        logList.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  )
}

export default LogList
