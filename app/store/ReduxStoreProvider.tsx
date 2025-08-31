/* eslint-disable react-compiler/react-compiler */
"use client";
import { setupListeners } from "@reduxjs/toolkit/query";
import { memo, useEffect, useRef } from "react";
import { Provider } from "react-redux";

import { makeStore, type TAppStore } from "@/store";

interface ReduxStoreProviderProps {
  readonly children: React.ReactNode;
}

function ReduxStoreProvider({ children }: ReduxStoreProviderProps) {
  const storeRef = useRef<TAppStore | null>(null);

  if (!storeRef.current) {
    const store = makeStore();
    storeRef.current = store;
  }

  useEffect(() => {
    if (storeRef.current !== null) {
      const unsubscribe = setupListeners(storeRef.current.dispatch);
      return unsubscribe;
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}

export default memo(ReduxStoreProvider);
