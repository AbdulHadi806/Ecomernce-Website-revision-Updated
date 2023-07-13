import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { GLOBAL_VARIABLE_API } from "../../globalVariableApi/global-variable-api"

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({baseUrl: `${GLOBAL_VARIABLE_API}`}),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products?offset=0&limit=10"
    }),
    getProductByID: builder.query({
      query: (ID) => `/products/${ID}`
    }),
    getProductByCategory: builder.query({
      query: (category) => `categories/${category}/products?offset=0&limit=10`
    })
  })
})
export const {useGetAllProductsQuery, useGetProductByIDQuery, useGetProductByCategoryQuery} = productApi