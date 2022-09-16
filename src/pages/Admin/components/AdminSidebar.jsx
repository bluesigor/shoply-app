import React from 'react'
import { Button, Stack } from '@mui/material'

import Localizator from '../../../common/components/Localizator'
import useAdminData from '../../../services/useAdminData/useAdminData'
import { useSidebarStyle } from '../../../assets/styles/useSidebarStyle'
import { useAdminDataContext } from '../../../context/AdminUsersDataContext'

const AdminSidebar = () => {
  const {
    handleShowProducts,
    handleShowBlockedUsers,
    handleShowUsers,
  } = useAdminData()
  const classes = useSidebarStyle()
  const { showPage } = useAdminDataContext()

  return (
    <Stack className={classes.root}>
      <Button
        variant="outlined"
        color="inherit"
        sx={{
          border: `${showPage.users && '3px solid black'}`,
          fontWeight: `${showPage.users && 700}`,
        }}
        className={classes.button}
        onClick={handleShowUsers}
      >
        <Localizator str="Users" />
      </Button>
      <Button
        variant="outlined"
        color="inherit"
        sx={{
          border: `${showPage.products && '3px solid black'}  `,
          fontWeight: `${showPage.products && 700}`,
        }}
        className={classes.button}
        onClick={handleShowProducts}
      >
        <Localizator str="Products" />
      </Button>

      <Button
        sx={{
          border: `${showPage.blockedUsers && '3px solid black'}  `,
          fontWeight: `${showPage.blockedUsers && 700}`,
        }}
        variant="outlined"
        color="inherit"
        className={classes.button}
        onClick={handleShowBlockedUsers}
      >
        <Localizator str="Blocked Users" />
      </Button>
    </Stack>
  )
}

export default AdminSidebar
