import { Link } from 'react-router-dom'
import { Button, Paper, Toolbar, Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import { Box, Container } from '@mui/system'

import { pages } from '../../utils/consts/navbarConsts'
import Burger from './Burger'
import LoginNavbar from './LoginNavbar'
import { useNavbarStyle } from '../../assets/styles/useNavbarStyle'
import { useUserSettingsContext } from '../../context/UserSettingsContext'
import Localizator from './Localizator'

const Navbar = () => {
  const classes = useNavbarStyle()
  const { language } = useUserSettingsContext()

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
              <Typography component="h2" variant="h4">
                Shoply.
              </Typography>
              {pages.map((page) => {
                return (
                  <Box
                    key={page.link}
                    sx={{
                      flexGrow: 1,
                      justifyContent: 'space-around',
                      display: { xs: 'none', md: 'flex' },
                    }}
                  >
                    <Button
                      sx={{
                        color: 'inherit',
                        fw: '300',
                      }}
                    >
                      <Link className={classes.link} to={page.link}>
                        <Localizator lang={language} str={page.title} />
                      </Link>
                    </Button>
                  </Box>
                )
              })}
              <LoginNavbar />
              <Burger />
            </Toolbar>
          </Container>
        </Paper>
      </AppBar>
    </>
  )
}

export default Navbar
