import { configureStore } from "@reduxjs/toolkit";
import recordsSlice from "./slices";

export const store = configureStore({
  reducer: {
    recordsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
