import React, { useState, useContext } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import LogContext from '../../context/log/logContext'
import TenantContext from '../../context/tenant/tenantContext'

const AddTenantModal = () => {
  const tenantContext = useContext(TenantContext)
  const { addTenant } = tenantContext

  const [tenant, setTenant] = useState({
    firstName: '',
    lastName: '',
  })

  const { firstName, lastName } = tenant

  const onChange = (e) => {
    setTenant({ ...tenant, [e.target.name]: e.target.value })
  }

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a first and last name' })
    } else {
      console.log(firstName, lastName)
      addTenant(tenant)
      setTenant({
        firstName: '',
        lastName: '',
      })
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
              onChange={onChange}
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
              onChange={onChange}
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
