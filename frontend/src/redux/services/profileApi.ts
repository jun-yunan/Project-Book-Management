import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootState } from '../store';
import { IProfile } from '@/types/user';

export const profileApi = createApi({
    reducerPath: 'profileApi',
    tagTypes: ['profile'],
    refetchOnFocus: true,
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
        getProfile: builder.query<IProfile, { userId: string }>({
            query: ({ userId }) => ({
                url: `/user/${userId}/profile`,
            }),
            providesTags: (result) => {
                if (result) {
                    return [
                        { type: 'profile' as const, id: result._id },
                        { type: 'profile' as const, id: 'LIST' },
                    ];
                }
                return [{ type: 'profile' as const, id: 'LIST' }];
            },
        }),
        changeAvatar: builder.mutation<any, { data: any; userId: string }>({
            query: ({ data, userId }) => ({
                url: `/user/${userId}/change-avatar`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: (result, error, data) =>
                error
                    ? []
                    : [
                          { type: 'profile' as const, id: data.userId },
                          { type: 'profile' as const, id: 'LIST' },
                      ],
        }),
        editPersonInformation: builder.mutation<any, { data: {}; userId: string }>({
            query: ({ data, userId }) => ({
                url: `/user/${userId}/profile/edit-person-information`,
                method: 'PUT',
                body: data,
            }),
        }),
    }),
});

export const { useChangeAvatarMutation, useGetProfileQuery, useEditPersonInformationMutation } = profileApi;
