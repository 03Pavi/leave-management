"use client";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, {  AppStore } from "@/store";
import persistStore from "redux-persist/es/persistStore";
import { Persistor } from "redux-persist";
export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore>()
  const persistorRef=useRef<Persistor>()
  if (!storeRef.current || !persistorRef.current) {
    storeRef.current = store()
    persistorRef.current = persistStore(storeRef.current)
  }
  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistorRef.current}>
        {children}
      </PersistGate>
    </Provider>
  );
}