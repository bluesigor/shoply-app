import {
  Button,
  Grid,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import EditIcon from '@mui/icons-material/Edit'
import AppBar from '@mui/material/AppBar'
import { Box, Container } from '@mui/system'
import { pages } from '../../utils/consts/navbarConsts'
import Burger from './Burger'
import useLogin from '../../utils/hooks/useLogin'
import { Logout } from '@mui/icons-material'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const { isLoggedIn, logout, inputData } = useLogin()
  const { email, isAdmin } = inputData
  return (
    <AppBar position="static" sx={{ background: 'none' }}>
      <Paper>
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              height: '115px',
            }}
          >
            <Typography sx={{}} component="h2" variant="h4">
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
                      fw: '300',
                    }}
                  >
                    <Link
                      sx={{
                        color: 'inherit',
                      }}
                      to={page.link}
                    >
                      {page.title}
                    </Link>
                  </Button>
                </Box>
              )
            })}
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
                    textAlign: 'center',
                  }}
                >
                  <Link to={isAdmin ? 'admin' : 'user'}>{email}</Link>
                </Button>
              ) : (
                <Button
                  color="inherit"
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  <Link to="/login">Login</Link>
                </Button>
              )}
              {isLoggedIn && (
                <IconButton onClick={logout}>
                  <Logout />
                </IconButton>
              )}
            </Grid>
            <Burger />
          </Toolbar>
        </Container>
      </Paper>
    </AppBar>
  )
}

export default Navbar
