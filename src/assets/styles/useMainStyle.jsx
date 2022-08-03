import { makeStyles } from '@mui/styles'

export const useMainStyle = makeStyles((theme) => ({
  root: {
    background: 'linear-gradient(90deg, #a3a2a1 1.6%, #FFFFFF 100%)',
  },
  button: {
    '&:hover': {
      border: '2px solid black',
    },
  },
}))
