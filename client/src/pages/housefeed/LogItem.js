import React, { useContext } from 'react'
import Moment from 'react-moment'
import LogContext from '../../context/log/logContext'

const LogItem = ({ log }) => {
  const logContext = useContext(LogContext)
  const { deleteLog, current, setCurrent, clearCurrent } = logContext

  const { _id, name, header, content, category, completed, date } = log

  const onDelete = () => {
    deleteLog(_id)
    clearCurrent()
  }

  const handleClick = (e) => {
    e.preventDefault()
    setCurrent(log)
  }

  return (
    <li className='collection-item'>
      <div>
        <h5>{header}</h5>
        <p className={`${completed ? 'green-text' : 'red-text'}`}>{content}</p>
        <span className='grey-text'>
          Created by: <span className='black-text'>{name} </span>
          on <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment>
        </span>
        <a href='#!'>
          <i
            onClick={onDelete}
            className='material-icons secondary-content grey-text'
          >
            delete
          </i>
        </a>

        <a
          href='#edit-log-modal'
          onClick={handleClick}
          className='modal-trigger secondary-content'
        >
          <i className='material-icons grey-text'>edit</i>
        </a>
      </div>
    </li>
  )
}

export default LogItem
