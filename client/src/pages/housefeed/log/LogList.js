import React, { useState, useEffect, useContext } from 'react'
import LogContext from '../../../context/log/logContext'
import LogItem from './LogItem'
import M from 'materialize-css/dist/js/materialize.min.js'
import Loader from '../../../layout/Loader'

const LogList = () => {
  const logContext = useContext(LogContext)
  const { logs, current, getLogs, loading } = logContext

  useEffect(() => {
    M.AutoInit()
    getLogs()
    // eslint-disable-next-line
  }, [])
  if (logs !== null && logs.length === 0 && !loading) {
    return (
      <h3 className='cellection-header'>
        Welcome! Start by adding house members by accessing the blue button
        below.
      </h3>
    )
  }
  return (
    <div>
      {logs !== null && !loading ? (
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
              <LogItem current={current} log={log} key={log._id} />
            ))
          )}
        </ul>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default LogList
