import { clientEnv } from "@/config/clientEnv";
import {
  combineSlices,
  configureStore,
  type Action,
  type ThunkAction,
} from "@reduxjs/toolkit";
import { apiSlice } from "./api";

const rootReducer = combineSlices(apiSlice);

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: clientEnv.NODE_ENV === "development",
  });

// ✅ Types
export type TRootState = ReturnType<typeof rootReducer>;
export type TAppStore = ReturnType<typeof makeStore>;
export type TAppDispatch = TAppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  TRootState,
  unknown,
  Action
>;
