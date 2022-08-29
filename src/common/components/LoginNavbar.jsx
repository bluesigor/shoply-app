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
  const { userData, setIsLoggedIn, isLoggedIn, isAdmin } = useUserDataContext()
  const { cart } = useShoppingCartContext()
  
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
      {isLoggedIn && !isAdmin &&
        
          <IconButton>
            <Link
              style={{
                color: 'inherit',
              }}
              to="shoppingCard"
            >
              <ShoppingCartOutlinedIcon />
            </Link>
            {cart.length > 0 ? cart.length : null}
          </IconButton>
        
      }
      {isLoggedIn ? (
        <Button
          color="inherit"
          sx={{
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
            textAlign: 'center',
          }}
        >
          <Link className={classes.link} to="/login">
            <Localizator str="Login" />
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
