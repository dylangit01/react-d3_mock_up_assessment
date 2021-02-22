import makeStyles from '@material-ui/core/styles/makeStyles'

export default makeStyles(theme=>({
  svg: {
    overflow: 'visible',
  },
  svgGrid: {
    display: 'inline-block',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '240px',
    textAlign: 'center',
    margin: theme.spacing(.5),
    width: '150px',
    border: '1px solid #ddd',
    borderRadius: '5px'
  },
  btn: {
    textTransform: 'none',
    height:'240px',
    width: '150px',
    '&:hover': {
      backgroundColor: '#F2FAFE',
    },
  },
  itemColor: {
    color: '#5D70C1',
    margin: theme.spacing(.8)
  },
  sample: {
    margin: theme.spacing(.8),
    fontSize: '15px'
  }
}))
