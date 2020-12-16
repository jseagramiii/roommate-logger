import React from 'react'
import { Link } from '@reach/router'

const Navbar = () => {
  return (
    <nav style={{ marginBottom: '4em' }}>
      <div className='nav-wrapper'>
        <a style={{ paddingLeft: '.5em' }} href='#' className='brand-logo'>
          House Keeper
        </a>

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
