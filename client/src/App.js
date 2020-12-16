import React, { useEffect, useState } from 'react'
import { Router, Link } from '@reach/router'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min'
import Navbar from './layout/Navbar'
import SearchBar from './layout/SearchBar'
import LogList from './log/LogList'
import LogState from './context/log/LogState'
import LogForm from './log/LogForm'
import AddButton from './layout/AddButton'
import Calendar from './Calendar'

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
          </Router>
          <AddButton />
        </div>
      </div>
    </LogState>
  )
}

export default App
