import React from 'react'
import DonutChart from 'react-d3-donut';
import { Card, Grid, Container } from '@material-ui/core'
import useStyles from './GaugeChartWithPk-styles'
import './donut-styles.css'

const GaugeChartWithPk = ({ chartData }) => {
  const classes = useStyles()
  const data = [
    {
      count: chartData?.score / 100,
      color: '#0071C5'
    },
    {
      count: 1 - chartData?.score / 100,
      color: '#eee'
    }, ]
  return (
    <>
      <Container maxWidth='lg' className={classes.root}>
        <Grid item sm={5}>
          <div>
            <DonutChart
              innerRadius={ 50 }
              outerRadius={ 56 }
              transition={ true }
              svgClass="example3"
              pieClass="pie3"
              displayTooltip={ true }
              strokeWidth={ 0 }
              data={ data }/>

          </div>

        </Grid>
      </Container>

    </>
  )
}

export default GaugeChartWithPk
