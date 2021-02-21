import { GET_CURRENT_NAME } from '../constants/actionTypes'

export const getCurrentName = (currentName) => async (dispatch) => {
  try{
    dispatch({type: GET_CURRENT_NAME, payload:currentName})
  } catch (e) {
    console.log(e)
  }
}

