import makeStyles from '@material-ui/core/styles/makeStyles'
import React from 'react'

export default makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5)
  },
  // content: {
  //   display: 'flex',
  //   justifyContent: 'space-between'
  // },
  checkboxes: {
    padding: theme.spacing(1),
    border: '1px solid #ddd',
    borderRadius: '8px',
    '& .MuiTypography-body1': {
      fontSize: '.8rem'
    }
  },
  filterInfo: {
    marginLeft: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  },
  icInfo: {
    fontSize: '15px'
  },
  btnConfig: {
    display: 'flex',
  }
}))
