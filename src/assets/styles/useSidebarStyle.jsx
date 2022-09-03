import { makeStyles } from '@mui/styles'

export const useSidebarStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row !important',
    justifyContent: 'space-evenly',
    '@media (min-width:1024px)': {
      maxWidth: '220px',
      flexDirection: 'column !important',
      margin: '20px 10px !important',
    },
  },
  button: {
    fontSize: '12px !important',
    margin: '10px !important',
    flex: 1,
    '@media (min-width:1024px)': {
      width: '100%',
      padding: '20px !important',
      fontSize: '20px !important',
    },
  },
}))
