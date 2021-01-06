import React, { useState, useEffect, useContext } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import LogContext from '../../context/log/logContext'

const EditLogModal = () => {
  const logContext = useContext(LogContext)
  const { current, clearCurrent } = logContext

  useEffect(() => {
    if (current !== null) {
      setLog(current)
    } else {
      setLog({
        name: '',
        header: '',
        content: '',
      })
    }
  }, [current, logContext])

  const [log, setLog] = useState({
    name: '',
    header: '',
    content: '',
  })

  const { name, header, content, completed } = log

  const onSubmit = () => {
    console.log(name, header, content, completed)
    if (content === '' || name === '') {
      M.toast({ html: 'Please enter a name and header' })
    } else {
      console.log(name, header, completed)
      setLog({
        name: '',
        header: '',
        content: '',
      })
    }
  }

  const onChange = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value })
  }

  return (
    <div id='edit-log-modal' className='modal'>
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
              <option value='John Jones'>John Jones</option>
              <option value='John Johnson'>John Johnson</option>
            </select>
          </div>
        </div>
        {/* <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={completed}
                  value={completed}
                  onChange={(e) => setCompleted(!completed)}
                />
              </label>
            </p>
          </div>
        </div> */}
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

export default EditLogModal
