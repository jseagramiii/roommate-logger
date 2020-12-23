import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import LogContext from '../../context/log/logContext'
import NameItem from './NameItem'

const NameListModal = () => {
  //  const [names, setNames] = useState([])
  const [loading, setLoading] = useState(false)

  //  useEffect(() => {
  //    getNames()
  //    // eslint-disable-next-line
  //  }, [])

  //  const getNames = async () => {
  //    setLoading(true)
  //  }
  const names = [
    {
      firstName: 'James',
      lastName: 'Seagram',
    },
    {
      firstName: 'Nick',
      lastName: 'Cage',
    },
    {
      firstName: 'Emily',
      lastName: 'Victoria',
    },
  ]

  return (
    <div id='name-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>List of Current House Members</h4>
        <ul className='collection'>
          {names.map((name) => {
            return <NameItem name={name} key={name.id} />
          })}
        </ul>
      </div>
    </div>
  )
}

export default NameListModal
