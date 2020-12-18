import React, { useEffect, useState } from 'react'
import { Router, Link } from '@reach/router'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Navbar from './layout/Navbar'
import SearchBar from './layout/SearchBar'
import LogList from './pages/log/LogList'
import LogState from './context/log/LogState'
import Calendar from './pages/calendar/Calendar'
import Expense from './pages/expenses/Expense'

const App = () => {
  useEffect(() => {
    M.AutoInit() // eslint-disable-next-line
  })

  return (
    <LogState>
      <div>
        <Navbar />
        {/*<SearchBar />*/}
        <div className='container'>
          <Router>
            <LogList path='/' />
            <Calendar path='calendar' />
            <Expense path='expenses' />
          </Router>
        </div>
      </div>
    </LogState>
  )
}

export default App
