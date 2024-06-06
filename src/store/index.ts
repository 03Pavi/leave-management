import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "@/features/user/user.slice";
import createWebStorage from "redux-persist/es/storage/createWebStorage";
import { persistReducer } from "redux-persist";
//Noop storage function
const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};
//setting up the storage
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();
const persistConfig = {
    key: "root",
    storage,
};
const rootReducer = combineReducers({
    userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = () =>
    configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    });
export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export default store;