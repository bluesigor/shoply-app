import { Button, MenuItem } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import { useBurgerStyle } from '../../assets/styles/useBurgerStyle'
import { useUserDataContext } from '../../context/UserDataContext'
import Localizator from './Localizator'

const BurgelProfileLink = ({ handleCloseNavMenu }) => {
  const { isLoggedIn, isAdmin } = useUserDataContext()
  const classes = useBurgerStyle()

  return (
    <>
      {isLoggedIn && (
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
          >
            <Link className={classes.link} to={isAdmin ? '/admin' : '/user'}>
              <Localizator
                str={isLoggedIn && isAdmin ? 'Admin Profile' : 'Profile'}
              />
            </Link>
          </Button>
        </MenuItem>
      )}
    </>
  )
}

export default BurgelProfileLink
