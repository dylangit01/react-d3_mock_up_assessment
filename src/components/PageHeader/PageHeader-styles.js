import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1)
  },
  sub: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '20px',
  },
  subContent: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    lingHeight: '100px'
  },
  subBg: {
    backgroundColor: '#EDECEC'
  }
}))
