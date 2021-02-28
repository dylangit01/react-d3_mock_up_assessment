import { GET_CURRENT_NAME } from '../constants/actionTypes'

const iniState = {name: ''}

const chartReducer = (state = iniState, action) => {
  switch(action.type ) {
    case GET_CURRENT_NAME:
      // console.log(action.payload)
      return {
        ...state,
        name: action.payload
      }

    default:
      return state
  }
}


export default chartReducer;


