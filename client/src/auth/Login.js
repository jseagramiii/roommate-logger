import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../context/alert/alertContext'
import AuthContext from '../context/auth/authContext'
import M from 'materialize-css/dist/js/materialize.min.js'

const Login = (props) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const { setAlert } = alertContext
  const { login, error, clearErrors, isAuthenticated } = authContext

  const { email, password } = user

  useEffect(() => {
    M.AutoInit()
    if (isAuthenticated) {
      props.history.push('/')
    }
    if (error === 'invalid credentials') {
      setAlert(M.toast({ html: `${error}` }))
      clearErrors()
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history])

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (email === '' || password === '') {
      setAlert(M.toast({ html: 'Please fill out all fields' }))
    } else {
      login({
        email,
        password,
      })
    }
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
