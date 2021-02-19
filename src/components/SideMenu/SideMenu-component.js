import React from 'react'
import useStyles from './SideMenu-styles'

const SideMenu = () => {
  const classes = useStyles()
  return (
    <div className={ classes.sideMenu }>
      <span className={ `material-icons ${ classes.iconStyles }` }>
        push_pin
      </span>
      <span className={ `material-icons ${ classes.iconStyles }` }>
        bar_chart
      </span>
      <span className={ `material-icons ${ classes.iconStyles }` }>
        mark_email_read
      </span>
      <span className={ `material-icons ${ classes.iconStyles }` }>
        workspaces
      </span>
      <span className={ `material-icons ${ classes.iconStyles }` }>
        forward_to_inbox
      </span>
    </div>
  )
}

export default SideMenu;
