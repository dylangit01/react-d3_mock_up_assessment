import { FETCH_ALL } from '../constants/actionTypes'

const initialData = { gaugeData: [], areaData: {} }

const dataReducer = (data = initialData, action) => {
  switch( action.type ) {
    case FETCH_ALL:
      return { ...data, gaugeData: action.payload?.gaugeData, areaData: action.payload?.areaData }
    default:
      return data
  }
}

export default dataReducer
