import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/auth/authContext'

const Navbar = () => {
  const authContext = useContext(AuthContext)

  const { isAuthenticated, logout, user } = authContext

  const handleLogout = () => {
    logout()
  }

  const authLinks = (
    <div>
      <ul>
        <li>Hello, {user && user.name}</li>
        <li>
          <a href='#!' onClick={handleLogout}>
            Logout
          </a>
        </li>
        <li>
          <Link to='/'>House Feed</Link>
        </li>
        <li>
          <Link to='/calendar'>Calendar</Link>
        </li>
        <li>
          <Link to='/expenses'>Expenses</Link>
        </li>
      </ul>
    </div>
  )

  const guestLinks = (
    <div>
      <ul>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </div>
  )

  return (
    <nav style={{ marginBottom: '4em' }}>
      <div className='nav-wrapper'>
        <Link style={{ paddingLeft: '.5em' }} to='/' className='brand-logo'>
          House Keeper
        </Link>

        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
