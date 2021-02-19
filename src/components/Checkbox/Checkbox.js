import React from 'react'
import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'

const Checkbox = ({ name, label }) => {
  return (
    <FormControl>
      <FormControlLabel
        control={ <MuiCheckbox
          icon={<CheckBoxOutlineBlankIcon style={{fontSize: '15px'}}/>}
          checkedIcon={<CheckBoxIcon style={{fontSize: '15px'}} />}
          name={name}
          color='primary'
        /> }
        label={ label }
      />
    </FormControl>
  )
}

export default Checkbox
