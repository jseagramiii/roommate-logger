import React, { useState, useEffect, useContext } from 'react'
import AlertContext from '../context/alert/alertContext'
import AuthContext from '../context/auth/authContext'
import M from 'materialize-css/dist/js/materialize.min.js'
import { CLEAR_ERRORS } from '../context/types'

const Register = (props) => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const { setAlert } = alertContext
  const { register, error, clearErrors, isAuthenticated } = authContext

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  useEffect(() => {
    M.AutoInit()
    if (isAuthenticated) {
      props.history.push('/')
    }
    if (error === 'User with this email already exists') {
      setAlert(M.toast({ html: `${error}` }))
      clearErrors()
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history])

  const { name, email, password, password2 } = user

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (name === '' || email === '' || password === '') {
      setAlert(M.toast({ html: 'Please fill out all fields' }))
    } else if (password !== password2) {
      setAlert(M.toast({ html: 'Passwords do not match' }))
    } else if (password.length < 6) {
      setAlert(
        M.toast({ html: 'Password length must be at least 6 characters' })
      )
    }
    register({
      name,
      email,
      password,
    })
  }

  return (
    <div>
      <h3 className='center'>
        Account <span style={{ color: 'tomato' }}>Registration</span>
      </h3>
      <div className='row collection center'>
        <form className='col s12' onSubmit={onSubmit}>
          <div className='row'>
            <div className='input-field col s6'>
              <label htmlFor='name'>Name</label>
              <input
                onChange={onChange}
                value={name}
                name='name'
                type='text'
                className='validate'
              />
            </div>
            <div className='input-field col s6'>
              <label htmlFor='email'>Email</label>
              <input
                onChange={onChange}
                type='email'
                value={email}
                name='email'
                className='validate'
              />
            </div>
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
            <div className='input-field col s6'>
              <label htmlFor='password2'>Confirm Password</label>
              <input
                onChange={onChange}
                type='password'
                value={password2}
                name='password2'
                className='validate'
              />
            </div>
            <button
              className='btn waves-effect waves-light red lighten-2'
              type='submit'
              value='register'
            >
              Register
              <i className='material-icons right'>create</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Register
