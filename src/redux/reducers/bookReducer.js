import { GET_BOOKS } from '../actions'

const initialState = {
  stock: [],
}

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        stock: action.payload, // action.payload is the array of the fetched books
      }

    default:
      return state
  }
}

export default bookReducer
