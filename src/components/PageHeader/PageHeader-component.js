import React from 'react';
import { Typography, IconButton, Container } from '@material-ui/core'
import useStyles from './PageHeader-styles'


const PageHeader = ({ title, icon, subTitle }) => {
  const classes = useStyles()

  return (
    <>
      <Container maxWidth='md'>
        <div className={ classes.title }>
          <Typography variant='h5' component='div'>
            { title }
          </Typography>
        </div>
      </Container>
      <div className={classes.subBg}>
        <Container maxWidth='md'>
          <div className={ classes.sub }>
            <div className={ classes.subContent }>
              { icon }
              <Typography variant='h5' component='div'>
                { subTitle }
              </Typography>
            </div>
            <IconButton>
            <span className="material-icons">
              push_pin
            </span>
            </IconButton>
          </div>
        </Container>
      </div>
    </>

  )
}

export default PageHeader
