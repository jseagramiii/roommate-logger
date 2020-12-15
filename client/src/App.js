import React, { useEffect, useState } from 'react'
import { Router, Link } from '@reach/router'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min'
import SearchBar from './layout/SearchBar'
import LogList from './log/LogList'

const App = () => {
  useEffect(() => {
    M.AutoInit() // eslint-disable-next-line
  })

  return (
    <div className='App'>
      <h2>House Keeper</h2>
      <SearchBar />
      <div className='container'>
        <LogList />
      </div>
    </div>
  )
}

export default App
