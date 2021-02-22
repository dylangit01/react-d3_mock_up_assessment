import { FETCH_ALL } from '../constants/actionTypes'

export const fetchData = () => async (dispatch) => {
  try {
    const res = await fetch('d3Data.json')
    const data = await res.json()
    dispatch({type: FETCH_ALL, payload:data})
  } catch( e ) {
    console.log(e)
  }
}

