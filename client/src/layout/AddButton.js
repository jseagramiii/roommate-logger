import React from 'react'

const AddButton = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-log-modal'
        className='btn-floating btn-large waves-effect blue darken-2 modal-trigger'
      >
        <i className='large material-icons'>add</i>
      </a>
      <ul>
        <li>
          <a
            href='#name-list-modal'
            className='btn-floating yellow darken-2 modal-trigger'
          >
            <i className='material-icons'>person</i>
          </a>
        </li>
        <li>
          <a
            href='#add-name-modal'
            className='modal-trigger btn-floating green darken-1'
          >
            <i className='material-icons'>person_add</i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default AddButton
