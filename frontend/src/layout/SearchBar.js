import React from 'react'

const SearchBar = () => {
  return (
    <nav style={{ marginBottom: '3em' }} className='teal lighten-2'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input id='search' type='search' />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>Search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}

export default SearchBar