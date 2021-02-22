import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(theme => ({
  root: {
    width: '100%',
    padding: '0 90px',
    display: 'flex'
  },
  gauLayout: {
    width: '500px',
    margin: '10px 10px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '20px'
  }
}))
