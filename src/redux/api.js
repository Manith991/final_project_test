import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const ecommerceApi = createApi({
    reducerPath: "ecommerceApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://fakestoreapi.in/api"}),
    endpoints: (build) => (
        {
            // get products
            getProducts: build.query({
                query: () => `/products`
            })
        }
    )
})

export const {
    useGetProductsQuery,
    useGetProductByIdQueryD
} = ecommerceApi;
