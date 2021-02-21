import React from 'react'
import GaugeChart from '../GaugeChart/GaugeChart-component'
import GaugeChartWithPk from '../GaugeChartWithPk/GaugeChartWithPk'
import useStyles from './GaugeCharts-styles'
import SingleChart from '../SingleGaugeChart/SingleGaugeChart'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import AreaChart from '../AreaChart/AreaChart-component'

const GaugeCharts = ({ areaData, gaugeData }) => {
  const classes = useStyles()

  // This is not the way to show the chart dynamically, but I dont know how to style d3/SVG if mapping them in child component...

  return (
    !gaugeData.length ? <CircularProgress/> : (
      <>
        <Container maxWidth='lg' className={ classes.root }>
          <div>
            <SingleChart gaugeData={ gaugeData[0] }
            />
            <SingleChart gaugeData={ gaugeData[1] }
            />
            <SingleChart gaugeData={ gaugeData[2] }
            />
            <br/>
            <SingleChart gaugeData={ gaugeData[3] }
            />
            <SingleChart gaugeData={ gaugeData[4] }
            />
            <SingleChart gaugeData={ gaugeData[5] }
            />
          </div>
          <>
            {
              !areaData?.Basics?.length ? <CircularProgress/> : (
                <AreaChart areaData={ areaData }/>
              )
            }
          </>
        </Container>
      </>
    )
  )
}

export default GaugeCharts
