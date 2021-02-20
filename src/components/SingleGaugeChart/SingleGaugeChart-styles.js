import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(theme=>({
  svg: {
    overflow: 'visible',
  },
  svgGrid: {
    display: 'inline-block',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '250px',
    textAlign: 'center',
    margin: theme.spacing(.5),
    width: '150px',
    border: '1px solid #ddd',
    borderRadius: '5px'
  },
  btn: {
    '&:hover': {
      backgroundColor: '#F2FAFE',
    },
  }
}))
