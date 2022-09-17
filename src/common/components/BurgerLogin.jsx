import { Button, MenuItem } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import { useBurgerStyle } from '../../assets/styles/useBurgerStyle'
import { useUserDataContext } from '../../context/UserDataContext'
import Localizator from './Localizator'

const BurgerLogin = ({ handleCloseNavMenu }) => {
  const { isLoggedIn, setIsLoggedIn } = useUserDataContext()
  const classes = useBurgerStyle()

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <MenuItem
      sx={{
        textAlign: 'center',
      }}
      onClick={handleCloseNavMenu}
    >
      <Button
        variant="contained"
        sx={{
          width: '100%',
          color: 'inherit',
          textDecoration: 'none',
          bgcolor: 'inherit',
          fontSize: '14px',
        }}
        onClick={handleLogout}
      >
        <Link className={classes.link} to="/login">
          <Localizator str={isLoggedIn ? 'Logout' : 'Login'} />
        </Link>
      </Button>
    </MenuItem>
  )
}

export default BurgerLogin
