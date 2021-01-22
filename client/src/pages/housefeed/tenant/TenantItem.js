import React, { useContext } from 'react'
import TenantContext from '../../../context/tenant/tenantContext'

const TenantItem = ({ tenant }) => {
  const tenantContext = useContext(TenantContext)
  const { deleteTenant } = tenantContext
  const { _id, firstName, lastName } = tenant

  const onDelete = () => {
    deleteTenant(_id)
  }
  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#/' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  )
}

export default TenantItem
