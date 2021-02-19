import makeStyles from '@material-ui/core/styles/makeStyles'
import React from 'react'

export default makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(5)
  },
  actionTitle: {
    display: 'flex',
    justifyContent: 'space-between'
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
    display: 'flex',
    alignItems: 'center'
  }
}))
