import React, { useState, useContext } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import LogContext from '../../context/log/logContext'
import TenantContext from '../../context/tenant/tenantContext'

const AddLogModal = () => {
  const logContext = useContext(LogContext)
  const { addLog } = logContext

  const tenantContext = useContext(TenantContext)
  const { tenants } = tenantContext

  const [log, setLog] = useState({
    name: '',
    header: '',
    content: '',
    completed: 'Not Completed',
  })

  const { name, header, content, completed } = log

  const onChange = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (content === '' || name === '') {
      M.toast({ html: 'Please enter a name and header' })
    } else {
      addLog(log)
      setLog({
        name: '',
        header: '',
        content: '',
        completed: 'Not Completed',
      })
    }
  }
  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter log for house feed</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='header'
              value={header}
              onChange={onChange}
            />
            <label htmlFor='header' className='active'>
              Log Header
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='content'
              value={content}
              onChange={onChange}
            />
            <label htmlFor='content' className='active'>
              Details
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='name'
              value={name}
              className='browser-default'
              onChange={onChange}
            >
              <option value='' disabled>
                Select House Member
              </option>
              <option value='John Smith'>John Smith</option>
              <option value='John Doe'>John Doe</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='radio'
                  name={completed}
                  checked={completed === 'Completed'}
                  value='Completed'
                  onChange={onChange}
                />
                <span>Completed </span>
              </label>
            </p>
            <p>
              <label>
                <input
                  type='radio'
                  name={completed}
                  checked={completed === 'Not Completed'}
                  value='Not Completed'
                  onChange={onChange}
                />
                <span>Not Completed</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#/'
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

export default AddLogModal
