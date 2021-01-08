import React, { useEffect, useState } from 'react'
import { Router, Link } from '@reach/router'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Navbar from './layout/Navbar'
import LogList from './pages/log/LogList'
import Calendar from './pages/calendar/Calendar'
import Expense from './pages/expenses/Expense'
import Register from './auth/Register'
import Login from './auth/Login'
import Alerts from './layout/Alerts'

import LogState from './context/log/LogState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'
import setAuthToken from './utilities/setAuthToken'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    M.AutoInit() // eslint-disable-next-line
  })

  return (
    <AuthState>
      <LogState>
        <AlertState>
          <div>
            <Navbar />
            <div className='container'>
              <Alerts />
              <Router>
                <LogList path='/' />
                <Calendar path='calendar' />
                <Expense path='expenses' />
                <Register path='register' />
                <Login path='login' />
              </Router>
            </div>
          </div>
        </AlertState>
      </LogState>
    </AuthState>
  )
}

export default App
