import { Link } from 'react-router-dom'
import { Button, Paper, Toolbar, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { Box, Container } from '@mui/system'

import { pages } from '../../utils/consts/navbarConsts'
import Burger from './Burger'
import LoginNavbar from './LoginNavbar'
import { useNavbarStyle } from '../../assets/styles/useNavbarStyle'
import Localizator from './Localizator'
import SwitchMode from './SwitchMode'

const Navbar = () => {
  const classes = useNavbarStyle()

  return (
    <>
      <AppBar position="static" sx={{ background: 'inherit' }}>
        <Paper>
          <Container maxWidth="xl">
            <Toolbar
              p={0}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '115px',
              }}
            >
              <Typography
                sx={{
                  flex: 2,
                }}
                component="h2"
                variant="h4"
              >
                Shoply.
              </Typography>
              <Box
                sx={{
                  flex: 4,
                  justifyContent: 'space-between',
                  display: { xs: 'none', md: 'flex' },
                }}
              >
                {pages.map((page) => {
                  return (
                    <Button
                      key={page.link}
                      sx={{
                        flex: 1,
                        color: 'inherit',
                        fw: '300',
                      }}
                    >
                      <Link className={classes.link} to={page.link}>
                        <Localizator str={page.title} />
                      </Link>
                    </Button>
                  )
                })}
                <LoginNavbar />
              </Box>
              <SwitchMode />

              <Burger />
            </Toolbar>
          </Container>
        </Paper>
      </AppBar>
    </>
  )
}

export default Navbar
