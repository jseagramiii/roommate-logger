import React, { useState, useContext } from 'react'
import Moment from 'react-moment'
import LogContext from '../../context/log/logContext'

const LogItem = ({ log }) => {
  const logContext = useContext(LogContext)
  const { deleteLog, current, setCurrent, clearCurrent } = logContext

  const { id, name, header, content, category, completed, date } = log

  const [modal, setModal] = useState(false)

  const onDelete = () => {
    deleteLog(id)
    clearCurrent()
  }

  const handleClick = (e) => {
    e.preventDefault()
    setCurrent(log)
    console.log(current)
  }

  return (
    <li className='collection-item'>
      <div>
        <h5>{header}</h5>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${completed ? 'green-text' : 'red-text'}`}
        >
          {content}
        </a>
        <br />
        <span className='grey-text'>
          Created by: <span className='black-text'>{name} </span>
          on <Moment format='MMMM Do YYYY, h:mm:ss a'> {date}</Moment>
        </span>
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text' onClick={onDelete}>
            delete
          </i>
        </a>
        <a
          href='#edit-log-modal'
          onClick={handleClick}
          className={`modal-trigger secondary-content ${
            completed ? 'green-text' : 'red-text'
          }`}
        >
          <i className='material-icons grey-text'>edit</i>
        </a>
      </div>
    </li>
  )
}

export default LogItem
