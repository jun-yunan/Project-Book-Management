import { FormBook } from '@/types/Form';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5500/api' }),
    endpoints: (builder) => ({
        addBook: builder.mutation<any, any>({
            query: (data) => ({
                url: `/users/admin/add-book`,
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useAddBookMutation } = bookApi;
