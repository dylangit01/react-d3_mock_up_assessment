import React from 'react'
import GaugeChart from '../GaugeChart/GaugeChart-component'
import GaugeChartWithPk from '../GaugeChartWithPk/GaugeChartWithPk'
import useStyles from './GaugeCharts-styles'
import SingleChart from '../SingleGaugeChart/SingleGaugeChart'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import AreaChart from '../AreaChart/AreaChart-component'
import { useSelector } from 'react-redux'

const GaugeCharts = () => {
  const classes = useStyles()

  const gaugeDataLists = useSelector(state => state.dataReducer.gaugeData)
  console.log(gaugeDataLists)
  const areaDataOb = useSelector(state => state.dataReducer.areaData)

  // This is not the optimized way to show the chart dynamically, but I dont know how to style d3/SVG if mapping them in child component...tried grid, but no luck

  return (
    !gaugeDataLists.length ? <CircularProgress/> : (
      <>
        <Container maxWidth='lg' className={ classes.root }>
          <div>
            <SingleChart gaugeData={ gaugeDataLists[0] }
            />
            <SingleChart gaugeData={ gaugeDataLists[1] }
            />
            <SingleChart gaugeData={ gaugeDataLists[2] }
            />
            <br/>
            <SingleChart gaugeData={ gaugeDataLists[3] }
            />
            <SingleChart gaugeData={ gaugeDataLists[4] }
            />
            <SingleChart gaugeData={ gaugeDataLists[5] }
            />
          </div>
          <>
            {
              !areaDataOb?.Basics?.length ? <CircularProgress/> : (
                <AreaChart />
              )
            }
          </>
        </Container>
      </>
    )
  )
}

export default GaugeCharts
