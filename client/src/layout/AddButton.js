import React from 'react'

const AddButton = () => {
  return (
    <div className='fixed-buttons'>
      <a
        style={margin}
        href='#add-log-modal'
        className='btn-floating btn-large blue darken-2 modal-trigger'
      >
        <i className='large material-icons'>add</i>
      </a>

      <a
        style={margin}
        href='#name-list-modal'
        className='btn-floating green modal-trigger'
      >
        <i className='material-icons'>person</i>
      </a>

      <a
        style={margin}
        href='#name-modal'
        className='btn-floating red modal-trigger'
      >
        <i className='material-icons'>person_add</i>
      </a>
    </div>
  )
}

const margin = {
  marginRight: '.5em',
}

export default AddButton
