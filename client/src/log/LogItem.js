import React from 'react'
import Moment from 'react-moment'

const LogItem = ({ log }) => {
  return (
    <li className='collection-item'>
      <div>
        <p>activity message</p>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.completed ? 'blue-text' : 'red-text'
          }`}
        >
          {log.header}
        </a>
        <br />
        <span className='grey-text'>
          Created by: <span className='black-text'>{log.name}</span>
          on <Moment format='MMMM Do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  )
}

export default LogItem
