import React, { useState } from 'react'

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = user

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Register')
  }

  return (
    <div>
      <h4 className='center'>Account Registration</h4>
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
                type='text'
                value={email}
                name='email'
                className='validate'
              />
            </div>
            <div className='input-field col s6'>
              <label htmlFor='password'>Password</label>
              <input
                onChange={onChange}
                type='text'
                value={password}
                name='password'
                className='validate'
              />
            </div>
            <div className='input-field col s6'>
              <label htmlFor='password2'>Confirm Password</label>
              <input
                onChange={onChange}
                type='text'
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
