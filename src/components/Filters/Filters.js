import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import useStyles from './Filters-styles'
import Checkbox from '../Checkbox/Checkbox'
import InfoIcon from '@material-ui/icons/Info';

const Filter = () => {
  const classes = useStyles()

  return (
    <Container maxWidth='md' className={ classes.root }>
      <Grid container className={ classes.content }>
        <Grid item sm={ 3 }>
          <Typography variant='body1'>
            Filters
          </Typography>
          <div className={ classes.checkboxes }>
            <div className={ classes.filterInfo }>
              <Checkbox
                name='cqaResults'
                label='All CQA Results'
              />
              <InfoIcon style={ { fontSize: '15px' } }/>
            </div>
            <div className={ classes.filterInfo }>
              <Checkbox
                name='cqaCloseLoop'
                label='CQAs with Closed Loop'
              />
              <InfoIcon style={ { fontSize: '15px' } }/>
            </div>
          </div>
        </Grid>
        <Grid item sm={ 9 }>
          <Typography variant='body1'>
            QUALITY SCORE TREND
          </Typography>
        </Grid>
      </Grid>

    </Container>

  )
}

export default Filter
