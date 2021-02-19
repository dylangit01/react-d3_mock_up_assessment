import React from 'react'
import {FormControl, FormControlLabel, Checkbox as MuiCheckbox} from '@material-ui/core'

const Checkbox = ({name, label, value, onChange}) => {
  return (
      <FormControl>
        <FormControlLabel
          control={<MuiCheckbox
          name={name}
          color='primary'
          checked={value}
          onChange={onChange}
          />}
          label={label}
        />
      </FormControl>
    )
}

export default Checkbox
