// import { v4 as uuidV4 } from "uuid";

// const initialState = {
//   input: { id: uuidV4(), title: "", completed: false },
//   edit: null,
//   task: [],
// };

// const taskReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD":
//       return [action.payload, ...state];
//     case "DELETE":
//       return state.filter((task) => {
//         task.id !== action.payload.id;
//       });
//     case "UPDATE":
//       return;
//     default:
//       return state;
//   }
// };

// export default taskReducer;
