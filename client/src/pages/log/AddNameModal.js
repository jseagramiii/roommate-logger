import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddNameModal = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a name' })
    } else {
      console.log(firstName, lastName)
      setFirstName('')
      setLastName('')
    }
  }
  return (
    <div id='add-name-modal' className='modal' style={{ modalStyle }}>
      <div className='modal-content'>
        <h4>Add House Member</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect btn'
        >
          Enter
        </a>
      </div>
    </div>
  )
}
const modalStyle = {
  width: '75%',
  height: '75%',
}

export default AddNameModal
