import React, { useState, useEffect } from 'react'
import SideMenu from './components/SideMenu/SideMenu-component'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Header from './components/Header/Header-component'
import { CssBaseline } from '@material-ui/core'
import PageHeader from './components/PageHeader/PageHeader-component'
import LanguageIcon from '@material-ui/icons/Language';
import Filter from './components/Filters/Filters-component'
import GaugeCharts from './components/GaugeCharts/GaugeCharts-component'

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '50px',
    width: '100%',
    height: '50px'
  }
})

const App = () => {
  const classes = useStyles()

  const [ gaugeData, setGaugeData ] = useState([])
  const [ areaData, setAreaData ] = useState([])

  const getData = async () => {
    const res = await fetch('d3Data.json')
    const data = await res.json()
    const { gaugeData, areaData } = await data
    setGaugeData(gaugeData)
    setAreaData(areaData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <CssBaseline>
        <SideMenu/>
        <div className={ classes.appMain }>
          <Header/>
          <PageHeader
            title='PERFORMANCE MANAGEMENT'
            subTitle='Diagnostic Tool'
            icon={ <LanguageIcon fontSize='large'/> }
          />
          <Filter/>
          <GaugeCharts areaData={ areaData } gaugeData={ gaugeData }/>
        </div>
      </CssBaseline>
    </>
  )
}

export default App
