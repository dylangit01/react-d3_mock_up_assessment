import { combineReducers } from 'redux'

import chartReducer from '../Reducers/d3ChartReducer'
import dataReducer from './dataReducer'

export default combineReducers({
  chartReducer,
  dataReducer
})
