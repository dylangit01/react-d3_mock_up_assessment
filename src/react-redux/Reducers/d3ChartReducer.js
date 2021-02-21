import { GET_CURRENT_NAME } from '../constants/actionTypes'

const chartReducer = (name= '', action) => {
  switch(action.type ) {
    case GET_CURRENT_NAME:
      // console.log(action.payload)
      return action.payload;

    default:
      return name
  }
}


export default chartReducer;


