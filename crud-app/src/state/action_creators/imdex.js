export const addTask = (input) => {
  return (dispatch) => {
    dispatch({
      type: "ADD",
      payload: input,
    });
  };
};

export const deleteTask = (task) => {
    return (dispatch) => {
        dispatch({
            type: 'DELETE',
            payload:task
        })
    }
}

export const updatetaskList = ({id, title, completed}) => {
  
}