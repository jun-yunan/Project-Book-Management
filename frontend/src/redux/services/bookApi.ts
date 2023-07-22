import { FormBook } from '@/types/Form';
import { IGetBooks } from '@/types/book';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const bookApi = createApi({
    reducerPath: 'bookApi',
    tagTypes: ['Books'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5500/api',
        prepareHeaders: (headers, { getState }) => {
            const accessToken = (getState() as RootState).auth.currentUser.accessToken;

            if (accessToken) {
                headers.set('authorization', `JWT ${accessToken}`);
            }
            return headers;
        },
    }),
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
                url: `/create-book-borrowing-form`,
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useAddBookMutation, useGetBooksQuery, useCreateBookBorrowingFormMutation } = bookApi;
