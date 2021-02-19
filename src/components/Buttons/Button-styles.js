import {makeStyles} from '@material-ui/core'


export default makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(.3),
      textTransform: 'none',
      padding: '5px 8px',
      minWidth: '50px',
      fontWeight: 'bold'
    },
  },
}))




// '& .MuiButton-containedSizeSmall': {
//   padding: '4px 4px'
// }
