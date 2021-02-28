import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import useStyles from './Filters-styles'
import Checkbox from '../Checkbox/Checkbox'
import InfoIcon from '@material-ui/icons/Info';
import Buttons from '../Buttons/Button'
import { useSelector } from 'react-redux'

const Filter = () => {
  const classes = useStyles()

  const title = useSelector(state => state.chartReducer.name)

  return (
    <Container maxWidth='lg' className={ classes.root }>
      <Grid container className={ classes.content }>
        <Grid item>
          <Typography variant='body1'>
            Filters
          </Typography>
          <div className={ classes.checkboxes }>
            <div className={ classes.filterInfo }>
              <Checkbox
                name='cqaResults'
                label='All CQA Results'
              />
              <InfoIcon className={ classes.icInfo }/>
            </div>
            <div className={ classes.filterInfo }>
              <Checkbox
                name='cqaCloseLoop'
                label='CQAs with Closed Loop'
              />
              <InfoIcon className={ classes.icInfo }/>
            </div>
          </div>
        </Grid>
        <Grid item sm/>
        <Grid item className={ classes.btnConfig }>
          <Typography variant='h6' className={ classes.trend }>
            {
              title ? `${ title } Trend`.toUpperCase() : 'QUALITY SCORE TREND'
            }
          </Typography>
          <Buttons/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Filter
