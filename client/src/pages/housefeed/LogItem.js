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
        <h5
          className={`${completed === 'Completed' ? 'green-text' : 'red-text'}`}
        >
          {header}
          <span style={{ marginRight: '1em' }} className='secondary-content'>
            <i
              className={`material-icons small ${
                completed === 'Completed' ? 'green-text' : 'red-text'
              }`}
            >
              {`${completed === 'Completed' ? 'check' : 'clear'}`}
            </i>
          </span>
        </h5>

        <h6>{content}</h6>

        <span className='grey-text'>
          Created by: <span className='black-text'>{name} </span>
          on <Moment format='MMMM Do YYYY, h:mm:ss a'>{date}</Moment>
        </span>
        <a href='#!'>
          <i
            onClick={onDelete}
            className='material-icons small secondary-content grey-text'
          >
            delete
          </i>
        </a>

        <a
          href='#edit-log-modal'
          onClick={handleClick}
          className='modal-trigger secondary-content'
        >
          <i className='material-icons small grey-text'>edit</i>
        </a>
      </div>
    </li>
  )
}

export default LogItem
