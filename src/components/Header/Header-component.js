import React from 'react'
import {AppBar, Toolbar, Grid, Typography, IconButton} from '@material-ui/core'
import TuneIcon from '@material-ui/icons/Tune';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import PrintIcon from '@material-ui/icons/Print';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useStyles from './Header-styles'

const Header =() => {
  const classes = useStyles()
  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolBar}>
        <Grid container alignItems='center'>
          <Grid item>
            <Typography className={classes.headTitle} variant='h5'>
              Diagnostic Tool
            </Typography>
          </Grid>
          <Grid item sm >
          </Grid>
          <Grid item className={classes.iconsDis}>
            <p className={classes.logger}>
              Logged in as General User
            </p>
              <IconButton className={classes.iconsColor}>
                <TuneIcon />
              </IconButton >
              <IconButton className={classes.iconsColor}>
                <SystemUpdateAltIcon />
              </IconButton>
              <IconButton className={classes.iconsColor}>
                <PrintIcon />
              </IconButton >
              <IconButton className={classes.iconsColor}>
                <HelpOutlineIcon />
              </IconButton>
              <IconButton className={classes.iconsColor}>
                <ExitToAppIcon />
              </IconButton>
          </Grid>

        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
