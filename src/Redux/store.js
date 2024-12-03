//   import { combineReducers, createStore } from "redux";
import todoReducer from "./Todo/todoSlice";
import productReducer from "./Shoping/shopingSlice";
// const composeEnhancers =
//   typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// const rootReducer = combineReducers({
//   tasks: statusReducer,
//     });

// const store = createStore(rootReducer, composeEnhancers());
// export default store;
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
      // tasks: todoReducer,
      products:productReducer,
    },
});

export default store;