// reducer
import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
    inProgress: [],
    complete: [],
  },
  reducers: {
    addTask: (state, action) => {
      const _data = {
        id: Date.now(),
        todo:{...action.payload},
        // title: {...action.payload.task},
        // des: action.payload.des,
        status: "ToDo",
      };
      state.todo.push(_data);
      // state.inProgress = state.inProgress.filter((item) => _data.id !== item.id);
    },
    inProgress: (state, action) => {
      const _inprogress = {
        ...action.payload,
        status: "InProgress",
      };
      console.log("action.payloadIn progreess", _inprogress);
      console.log("action.payload ", action.payload);

      state.todo = state.todo.filter((item) => _inprogress.id !== item.id);
      state.complete = state.complete.filter(
        (item) => _inprogress.id !== item.id
      );
      state.inProgress.push(_inprogress);
    },
    complete: (state, action) => {
      const data = {
        ...action.payload,
        status: "COMPLETE",
      };
      state.todo = state.todo.filter((item) => data.id !== item.id);
      state.inProgress = state.inProgress.filter((item) => data.id !== item.id);
      state.complete.push(data);
    },
    backtotodo: (state, action) => {
      const _data = {
        todo:{...action.payload},
        status: "ToDo",
      };
      console.log("action.payload", action.payload)
        
      console.log("_data.id", )
      state.todo.push(_data.todo);
      state.inProgress = state.inProgress.filter((item) => _data.todo.id !== item.id);
    },
  },
});
export const { addTask, inProgress, complete , backtotodo} = todoSlice.actions;
export default todoSlice.reducer;

// export default function statusReducer(state = initialState, action) {
// switch (action.type) {
//   case Add_Task:
//     const _data = {
//       id: Date.now(),
//       title: action.payload.task,
//       des: action.payload.des,
//       status: "ToDo",
//     };
//     console.log("statusReducer -> title", _data.title);
//     console.log("statusReducer -> des", _data.des);
//     return {
//       ...state,
//       todo: [_data, ...state.todo],
//     };
//   case IN_Progress:
//     const _inprogress = {
//       ...action.payload,
//       status: "InProgress",
//     };
//     return {
//       ...state,
//       todo: state.todo.filter((item) => _inprogress.id !== item.id),
//       complete: state.complete.filter((item) => _inprogress.id !== item.id),
//       inProgress: [...state.inProgress, _inprogress],
//     };
//   case Complete: {
//     const data = {
//       ...action.payload,
//       status: "COMPLETE",
//     };
//     console.log("statusReducer -> data", data);
//     return {
//       todo: state.todo.filter((item) => data.id !== item.id),
//       inProgress: state.inProgress.filter((item) => data.id !== item.id),
//       complete: [...state.complete, data],
//     };
//   }
//   default:
//     return state;
// }
// }
