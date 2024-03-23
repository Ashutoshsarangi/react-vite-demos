import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoReducer from "../features/todo/todoSlice";

const rootReducer = combineReducers({
  todo: todoReducer,
});

const persisteConfig = {
  key: "root",
  storage,
};

const persistedreducer = persistReducer(persisteConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedreducer,
});

export const persistor = persistStore(Store);
