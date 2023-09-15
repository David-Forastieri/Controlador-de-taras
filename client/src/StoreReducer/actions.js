
const URL = "http://localhost:8080/task"

export const saveUser = (user) => {
  return function (dispatch) {
    dispatch(getAllTask(user));
    dispatch({
      type: "SAVE_USER",
      payload: user
    })
  }
}

export const changeUser = () => {
  return { type: "CHANGE_USER" }
}

export const getAllTask = (user) => {
  return async function (dispatch) {
    try {
      const getRequest = await fetch(`${URL}/${user}`)
      if (getRequest.status === 200) {
        const response = await getRequest.json()
        dispatch({ type: "GET_TASK_DB", payload: response.task })
      } else dispatch({ type: "GET_TASK_DB", payload: [] })
    } catch (error) {
      console.log(`Server error:${error}`)
    }
  }
}

export const addNewTask = (titleTask, user, id) => {
  return async function (dispatch) {
    try {
      let response = await fetch(`${URL}/${user}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ titleTask })
      }).catch(err => {
        console.log(err.response.mesagge);
      });
      if (response.ok) {
        if (id) dispatch(finishTask(id, user))
        dispatch(getAllTask(user))
      }
    } catch (error) {
      console.log(`Server error:${error}`)
    }
  }
}

export const finishTask = (id, user) => {
  return async function (dispatch) {
    try {
      let response = await fetch(`${URL}/${id}/finishTask/${user}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
      }).catch(err => {
        console.log(err.response.mesagge);
      });
      if (response.ok) dispatch(getAllTask(user))
    } catch (error) {
      console.log(`Server error:${error}`)
    }
  }
}

export const editTitle = (titleTask, id, user) => {
  return async function (dispatch) {
    try {
      let response = await fetch(`${URL}/${id}/edit/${user}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ titleTask })
      }).catch(err => {
        console.log(err.response.mesagge);
      });
      if (response.ok) dispatch(getAllTask(user))
    } catch (error) {
      console.log(`Server error:${error}`)
    }
  }
}