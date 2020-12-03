import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LogItem from './LogItem'

const LogList = () => {
  const [logList, setLogList] = useState([])
  const [loading, setLoading] = useState(false)

  //  useEffect(() => {
  //    setLoading(true)

  //    const getLogList = async () => {
  //      setLoading(true)

  //      const res = await axios.get('/loglist')

  //      setLogList(res.data)
  //      setLoading(false)
  //    }
  //    getLogList()
  //  }, [])

  if (loading) {
    return <h3>Loading</h3>
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
        <LogItem />
      )}
    </ul>
  )
}

export default LogList
