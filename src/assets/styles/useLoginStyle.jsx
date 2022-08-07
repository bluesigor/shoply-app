import { makeStyles } from '@mui/styles'

export const useLoginStyle = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    flexDirection: 'column',
    display: 'flex',
    maxHeight: '100%',
    marginTop: '70px',
  },
  admin: {
    display: 'flex',
    flexDirection: 'row',
  },
}))
