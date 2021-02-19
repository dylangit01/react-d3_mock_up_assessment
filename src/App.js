import React from 'react'
import SideMenu from './components/SideMenu/SideMenu-component'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Header from './components/Header/Header-component'
import { CssBaseline, Container } from '@material-ui/core'
import PageHeader from './components/PageHeader/PageHeader-component'
import LanguageIcon from '@material-ui/icons/Language';
import Filter from './components/Filters/Filters'

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '50px',
    width: '100%',
    height: '50px'
  }
})

const App = () => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline>
        <SideMenu/>
        <div className={ classes.appMain }>
          <Header/>
          <PageHeader
            title='PERFORMANCE MANAGEMENT'
            subTitle='Diagnostic Tool'
            icon={<LanguageIcon fontSize='large'/>}
          />
            <Filter />
        </div>
      </CssBaseline>
    </>
  )
}

export default App
