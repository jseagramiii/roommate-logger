import React, { useContext } from 'react'
import AlertContext from '../context/alert/alertContext'

const Alerts = () => {
  const alertContext = useContext(AlertContext)
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => {
      return (
        <div key={alert.id}>
          <i className='material-icons'>alert</i> <span>{alert.mesage}</span>
        </div>
      )
    })
  )
}

export default Alerts
