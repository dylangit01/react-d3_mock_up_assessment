import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './Button-styles'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0071C5 !important'
    }
  }
})

const Buttons = () => {
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <ThemeProvider theme={ theme }>
        <Button size='small' variant="contained" disabled>Day</Button>
        <Button size='small' variant="contained" color="primary">
          Week
        </Button>
        <Button disableRipple size='small' variant="contained" style={ { backgroundColor: '#002D55', color: '#fff' } }>
          Month
        </Button>
        <Button size='small' variant="contained" color='primary'>
          Quarter
        </Button>
        <Button size='small' variant="contained" color="primary">
          Half
        </Button>
        <Button size='small' variant="contained" color="primary">
          Year
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default Buttons
