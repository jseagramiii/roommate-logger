import React from 'react'

const NameItem = ({ name }) => {
  const [firstName, lastName] = name
  return (
    <li className='collection-item'>
      <div>{firstName}</div>
    </li>
  )
}

export default NameItem
