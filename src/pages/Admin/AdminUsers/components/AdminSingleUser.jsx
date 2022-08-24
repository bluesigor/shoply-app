import React from 'react'

import { useAdminDataContext } from '../../../../context/AdminUsersDataContext'
import AdminUsersData from './AdminUsersData'

const AdminSingleUser = () => {
  const { adminUsers } = useAdminDataContext()

  return (
    <>
      {adminUsers.map((user) => {
        const {
          id,
          name: { firstname, lastname },
          username,
          email,
        } = user

        return (
          <AdminUsersData
            key={id}
            id={id}
            firstname={firstname}
            username={username}
            email={email}
            lastname={lastname}
          />
        )
      })}
    </>
  )
}

export default AdminSingleUser
