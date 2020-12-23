import React, { useContext } from 'react'
import Moment from 'react-moment'
import LogContext from '../../context/log/logContext'
import { SET_CURRENT, CLEAR_CURRENT } from '../../context/types'

const LogItem = ({ log }) => {
  const logContext = useContext(LogContext)
  const { deleteLog, current, setCurrent, clearCurrent } = logContext

  const { id, name, header, content, category, completed, date } = log

  const onDelete = () => {
    deleteLog(id)
    clearCurrent()
  }
  return (
    <li className='collection-item'>
      <div>
        <h5>{header}</h5>
        <a
          onClick={() => setCurrent(log)}
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
      </div>
    </li>
  )
}

export default LogItem
