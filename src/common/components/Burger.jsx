import React from 'react'
import { Button, IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Box } from '@mui/system'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { burgerPages } from '../../utils/consts/navbarConsts'
import { useBurgerStyle } from '../../assets/styles/useBurgerStyle'
import Localizator from './Localizator'

const Burger = () => {
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const classes = useBurgerStyle()

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {burgerPages.map((page) => {
          return (
            <MenuItem
              key={page.link}
              sx={{
                textAlign: 'center',
              }}
              onClick={handleCloseNavMenu}
            >
              <Button>
                <Link className={classes.link} to={page.link}>
                  <Localizator str={page.title} />
                </Link>
              </Button>
            </MenuItem>
          )
        })}
      </Menu>
    </Box>
  )
}

export default Burger
