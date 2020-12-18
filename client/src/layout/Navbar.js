import React from 'react'
import { Link } from '@reach/router'

const Navbar = () => {
  return (
    <nav style={{ marginBottom: '4em' }}>
      <div className='nav-wrapper'>
        <Link style={{ paddingLeft: '.5em' }} to='/' className='brand-logo'>
          House Keeper
        </Link>

        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/'>House Feed</Link>
          </li>
          <li>
            <Link to='calendar'>Calendar</Link>
          </li>
          <li>
            <Link to='expenses'>Expenses</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
