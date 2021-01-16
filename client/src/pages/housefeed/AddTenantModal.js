import React, { useState, useContext } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import LogContext from '../../context/log/logContext'

const AddTenantModal = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const logContext = useContext(LogContext)

  const { addLog } = logContext

  const [log, setLog] = useState({
    name: '',
    header: '',
    content: '',
    completed: 'Not Completed',
  })

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a name' })
    } else {
      console.log(firstName, lastName)
      addLog()
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

export default AddTenantModal
