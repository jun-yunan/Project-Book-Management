import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5500/api' }),
    endpoints: (builder) => ({
        signIn: builder.mutation<any, { email: string; password: string }>({
            query: ({ email, password }) => ({
                url: `/auth/signIn`,
                method: 'POST',
                body: { email, password },
            }),
        }),
        signUp: builder.mutation<any, { name: string; email: string; password: string }>({
            query: ({ email, name, password }) => ({
                url: `/auth/signUp`,
                method: 'POST',
                body: { email, name, password },
            }),
        }),
    }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
