import { FETCH_POSTS, NEW_POSTS } from '../actions/types'
const initialState = {
  data: []
}
export default function(state = initialState, action) {
  // console.log(100)  
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        data: action.payload
      }
    case NEW_POSTS:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state
  }
}