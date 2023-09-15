
const initialState = {
  user: ""
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_USER":
      return {
        ...state,
        user: action.payload
      }

    case "CHANGE_USER":
      return {
        ...state,
        user: ""
      }

    default:
      return state
  }

}