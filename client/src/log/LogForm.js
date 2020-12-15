import React, { useState } from 'react'

const LogForm = () => {
  const [log, setLog] = useState({
    name: '',
    header: '',
    content: '',
    category: '',
    completed: '',
    date: Date.now(),
  })
  const [name, header, content, category, completed, date] = log

  const onChange = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value })
  }

  return (
    <form>
      <h2>Add Entry</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Header'
        name='header'
        value={header}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Details'
        name='content'
        value={content}
        onChange={onChange}
      />
      <input
        type='radio'
        name='completed'
        value='completed'
        checked={completed}
      >
        completed
      </input>
      <input
        type='text'
        placeholder='Category'
        name='category'
        value={category}
        onChange={onChange}
      />
      <div>
        <input type='submit' value='Add log' />
      </div>
    </form>
  )
}

export default LogForm
