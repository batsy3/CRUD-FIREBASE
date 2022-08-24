import { combineReducers } from "redux";
import task_reducer from "./task_reducer";

const reducer = combineReducers({
  task: task_reducer,
});

export default reducer;
