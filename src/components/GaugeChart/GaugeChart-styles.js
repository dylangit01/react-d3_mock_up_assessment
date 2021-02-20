import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(theme=>({
    svg: {
      overflow: 'visible',
      // display: 'inline',
      background: '#eee',
      // width: '10%',
    },
    root: {
      display: 'grid',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '100px',
      textAlign: 'center',
      margin: '80px 0 10px 150px',
      width: '150px'
    }
}))
