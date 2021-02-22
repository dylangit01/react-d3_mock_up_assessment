import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    width: '50px',
    height: '100vh',
    backgroundColor: '#003C71',
    color: 'white',
    paddingTop: '50px'
  },
  iconStyles: {
    borderTop: '1px solid #000',
    padding: '11px',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#002D55'
    },
    '&:last-child':{
      borderBottom: '1px solid #000'
    }
  }
}))
