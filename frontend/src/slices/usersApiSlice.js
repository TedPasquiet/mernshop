import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
      register: buildQueryLifecycleHandler.mutation({
            query: (data) => ({
              url: `${USERS_URL}/register`,
              method: 'POST',
              body: data
            })
      }),
      Logout: builder.mutation({
        query: () => ({
          url: `${USERS_URL}/logout`,
          method: 'POST',
        })
      })
      // keepUnusedDataFor: 5,
    }),
  }),
});

export const { useLoginMutation,useLogoutMutation,useRegisterMutation} = usersApiSlice;
