import React from 'react'
import GaugeChart from '../GaugeChart/GaugeChart-component'
import GaugeChartWithPk from '../GaugeChartWithPk/GaugeChartWithPk'
import useStyles from './GaugeCharts-styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import AreaChart from '../AreaChart/AreaChart-component'
import { useSelector } from 'react-redux'

const GaugeCharts = () => {
  const classes = useStyles()

  const gaugeDataLists = useSelector(state => state.dataReducer.gaugeData)
  const areaDataOb = useSelector(state => state.dataReducer.areaData)

  return (
    !gaugeDataLists.length ? <CircularProgress/> : (
      <>
        <Container maxWidth='lg' className={ classes.root }>
          <div className={ classes.gauLayout }>
            {
              gaugeDataLists.map(gaugeData => (
                <GaugeChart key={ gaugeData?.name } gaugeData={ gaugeData }/>
              ))
            }
          </div>
          <>
            {
              !areaDataOb?.Basics?.length ? <CircularProgress/> : (
                <AreaChart/>
              )
            }
          </>
        </Container>
      </>
    )
  )
}

export default GaugeCharts
