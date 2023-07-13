import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productApi } from "./apiCalls/productApi";
import cartslice from "./slice/cartslice";
const rootReducer = combineReducers({
  cartSlice: cartslice,
  [productApi.reducerPath]: productApi.reducer,
});

export const store = configureStore({
  reducer:rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    

    .concat(productApi.middleware)

}

)