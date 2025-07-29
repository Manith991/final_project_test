// import { fetchBaseQuery } from "@reduxjs/toolkit/query";
// import { createApi } from "@reduxjs/toolkit/query/react";

// export const ecommerceApi = createApi({
//     reducerPath: "ecommerceApi",
//     baseQuery: fetchBaseQuery({baseUrl: "https://fakestoreapi.in/api"}),
//     endpoints: (build) => (
//         {
//             // get products
//             getProducts: build.query({
//                 query: () => `/products`
//             }),
//             getProductById: build.query({
//             query: (id) => `/products/${id}`
//         })
//         }
//     )
// })

// export const {
//     useGetProductsQuery,
//     useGetProductByIdQuery
// } = ecommerceApi;

/**Use our own api */
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const ecommerceApi = createApi({
  reducerPath: "ecommerceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://car-nextjs-api.cheatdev.online/",
  }),
  tagTypes: ["cars"], 
  endpoints: (build) => ({
    // get products
    getProducts: build.query({
      query: ({ page, limit }) => `/cars?skip=${page}&limit=${limit}`,
    }),

    getProductById: build.query({
      query: (id) => `/cars/${id}`,
    }),

    //create product
    createProducts: build.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: ({ newCar, accessToken }) => ({
        method: "POST",
        url: `cars`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: newCar,
      }),
    }),

    //update product
    updateProduct: build.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: ({updateCar, accessToken, id}) => ({
        method: "PUT",
        url: `/cars/${id}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: updateCar,
      }),
      invalidatesTags: ["cars"]
    }),
    
     //delete product
    deleteProduct: build.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: ({id, accessToken}) => ({
        method: "DELETE",
        url: `/cars/${id}`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      }),
      invalidatesTags: ["cars"]
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductsMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = ecommerceApi;
