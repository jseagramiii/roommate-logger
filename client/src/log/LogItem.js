import React from 'react'
import Moment from 'react-moment'

const LogItem = ({ log }) => {
  const { name, header, content, category, completed, date } = log
  return (
    <li className='collection-item'>
      <div>
        <p>{header}</p>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${completed ? 'blue-text' : 'red-text'}`}
        >
          {content}
        </a>
        <br />
        <span className='grey-text'>
          Created by: <span className='black-text'>{name} </span>
          on <Moment format='MMMM Do YYYY, h:mm:ss a'> {date}</Moment>
        </span>
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  )
}

export default LogItem
