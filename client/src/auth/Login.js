import React, { useState, useContext } from 'react'
import AlertContext from '../context/alert/alertContext'
import M from 'materialize-css/dist/js/materialize.min.js'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const alertContext = useContext(AlertContext)

  const { setAlert } = alertContext

  const { email, password } = user

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (email === '' || password === '') {
      setAlert(M.toast({ html: 'Please fill out all fields' }))
    }
    console.log('Login')
  }

  return (
    <div>
      <h3 className='center'>
        Account <span style={{ color: 'tomato' }}>Login</span>
      </h3>
      <div className='collection center padding-10'>
        <form className='col s12' onSubmit={onSubmit}>
          <div className='row'>
            <div className='input-field col s6'>
              <label htmlFor='email'>Email</label>
              <input
                onChange={onChange}
                type='text'
                value={email}
                name='email'
                className='validate'
              />
            </div>
            <div className='row'>
              <div className='input-field col s6'>
                <label htmlFor='password'>Password</label>
                <input
                  onChange={onChange}
                  type='password'
                  value={password}
                  name='password'
                  className='validate'
                />
              </div>
            </div>
            <button
              className='btn waves-effect waves-light red lighten-2'
              type='submit'
              value='login'
            >
              Login
              <i className='material-icons right'>login</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login
