import { FormBook } from '@/types/Form';
import { IGetBooks } from '@/types/book';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookApi = createApi({
    reducerPath: 'bookApi',
    tagTypes: ['Books'],
    refetchOnMountOrArgChange: 10,
    // keepUnusedDataFor: 30,
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5500/api' }),
    endpoints: (builder) => ({
        addBook: builder.mutation<any, any>({
            query: (data) => ({
                url: `/users/admin/add-book`,
                method: 'POST',
                body: data,
            }),
        }),
        getBooks: builder.query<IGetBooks, any>({
            query: () => ({
                url: `/books`,
            }),
        }),
        createBookBorrowingForm: builder.mutation<any, any>({
            query: (data) => ({
                url: ``,
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useAddBookMutation, useGetBooksQuery, useCreateBookBorrowingFormMutation } = bookApi;
