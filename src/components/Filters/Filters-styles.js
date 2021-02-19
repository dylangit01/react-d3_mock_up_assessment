import makeStyles from '@material-ui/core/styles/makeStyles'
import React from 'react'

export default makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5),
    padding: '0 100px'
  },
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
  },
  trend: {
    marginRight: theme.spacing(6)
  }
}))
