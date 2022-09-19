import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, IconButton } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import { useNavbarStyle } from '../../assets/styles/useNavbarStyle'
import Localizator from './Localizator'

import { useUserDataContext } from '../../context/UserDataContext'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'

const LoginNavbar = () => {
  const classes = useNavbarStyle()
  const { isLoggedIn, userData, isAdmin } = useUserDataContext()
  const { cartLength } = useShoppingCartContext()

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
            marginLeft: '30px',
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
    </Grid>
  )
}

export default LoginNavbar
