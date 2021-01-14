import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Navbar from './layout/Navbar'
import Calendar from './pages/calendar/Calendar'
import Expense from './pages/expenses/Expense'
import Register from './auth/Register'
import Login from './auth/Login'
import Alerts from './layout/Alerts'
import Home from './pages/Home'
import PrivateRoute from './routing/PrivateRoute'
import LogState from './context/log/LogState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'
import setAuthToken from './utilities/setAuthToken'

const myStorage = window.localStorage

if (myStorage.token) {
  setAuthToken(myStorage.token)
}

const App = () => {
  useEffect(() => {
    M.AutoInit() // eslint-disable-next-line
  })

  return (
    <AuthState>
      <LogState>
        <AlertState>
          <Router>
            <Navbar />
            <div className='container'>
              <Alerts />
              <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <PrivateRoute exact path='/calendar' component={Calendar} />
                <PrivateRoute exact path='/expenses' component={Expense} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
          </Router>
        </AlertState>
      </LogState>
    </AuthState>
  )
}

export default App
