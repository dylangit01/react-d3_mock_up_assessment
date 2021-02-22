import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(theme => ({
  root: {
    padding: '0 100px'
  },
  title: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1)
  },
  sub: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '20px',
    padding: '0 80px'
  },
  subContent: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    lingHeight: '100px'
  },
  subIcon: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '5px'
  },
  subBg: {
    backgroundColor: '#EDECEC'
  }
}))
