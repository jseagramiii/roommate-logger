import React, { useEffect, useState } from 'react'
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './layout/SearchBar'
import LogList from './log/LogList'

const App = () => {
  useEffect(() => {
    M.AutoInit()
  })

  return (
    <div className='App'>
      <h2>Roommate App</h2>
      <SearchBar />
      <div className='container'>
        <LogList />
      </div>
    </div>
  )
}

export default App
