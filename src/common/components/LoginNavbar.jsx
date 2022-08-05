import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Logout } from '@mui/icons-material'

import { useUserDataContext } from '../../context/UserDataContext'
import { useMode } from '../../context/ModeContext'
import { useNavbarStyle } from '../../assets/styles/useNavbarStyle'

const LoginNavbar = () => {
  const { color } = useMode()
  const classes = useNavbarStyle()
  const { userData, setIsLoggedIn, isLoggedIn, isAdmin } = useUserDataContext()

  return (
    <Grid
      md={2}
      sx={{
        flexGrow: 0.5,
        justifyContent: 'space-between',
      }}
      display={{ xs: 'none', md: 'flex' }}
      item
    >
      {isLoggedIn && isAdmin ? (
        <IconButton>
          <EditIcon />
        </IconButton>
      ) : (
        <IconButton>
          <ShoppingCartOutlinedIcon />
        </IconButton>
      )}
      {isLoggedIn ? (
        <Button
          color="inherit"
          sx={{
            color: `${color ? 'white' : 'black'}`,
            textAlign: 'center',
          }}
        >
          <Link className={classes.link} to={isAdmin ? 'admin' : 'user'}>
            {userData.email}
          </Link>
        </Button>
      ) : (
        <Button
          color="inherit"
          sx={{
            color: `${color ? 'white' : 'black'}`,
            textAlign: 'center',
          }}
        >
          <Link className={classes.link} to="/login">
            Login
          </Link>
        </Button>
      )}
      {isLoggedIn && (
        <IconButton onClick={(e) => setIsLoggedIn(false)}>
          <Logout />
        </IconButton>
      )}
    </Grid>
  )
}

export default LoginNavbar
