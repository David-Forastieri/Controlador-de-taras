
const initialState = {
  allTask: []
}

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TASK_DB':
      return {
        ...state,
        allTask: action.payload
      }

    default:
      return state
  }
}