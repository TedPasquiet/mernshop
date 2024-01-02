import { apiSlice } from "./apiSlice";
import { ORDERS_URL } from "../constants";

// Inject endpoint to ApiSlice into endpoints builders connected to store.js
export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: "POST",
        body: { ...order },
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = ordersApiSlice;