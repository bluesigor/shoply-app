import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, IconButton } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Logout } from '@mui/icons-material'

import { useNavbarStyle } from '../../assets/styles/useNavbarStyle'
import Localizator from './Localizator'

import { useUserDataContext } from '../../context/UserDataContext'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'

const LoginNavbar = () => {
  const classes = useNavbarStyle()
  const { isLoggedIn, setIsLoggedIn, userData, isAdmin } = useUserDataContext()
  const { cartLength } = useShoppingCartContext()

  const handleLogout = (e) => {
    setIsLoggedIn(false)
  }

  return (
    <Grid
      sx={{
        flex: 1,
        justifyContent: 'center',
        maxWidth: '100%',
      }}
      display={{ xs: 'none', md: 'flex' }}
      item
    >
      {isLoggedIn && !isAdmin && (
        <IconButton>
          <Link
            style={{
              color: 'inherit',
            }}
            to="shoppingCard"
          >
            <ShoppingCartOutlinedIcon />
          </Link>
          {cartLength > 0 ? cartLength : null}
        </IconButton>
      )}
      {isLoggedIn ? (
        <Button
          color="inherit"
          sx={{
            alignItems: 'center',
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
            textAlign: 'center',
            alignItems: 'center',
          }}
        >
          <Link className={classes.link} to="/login">
            <Localizator str="Login" />
          </Link>
        </Button>
      )}
      {isLoggedIn && (
        <IconButton onClick={handleLogout}>
          <Logout />
        </IconButton>
      )}
    </Grid>
  )
}

export default LoginNavbar
