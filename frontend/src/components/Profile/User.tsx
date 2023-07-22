/* eslint-disable @next/next/no-img-element */
'use client';

import { FunctionComponent } from 'react';
import EditButton from '../Button/EditButton';
import { useGetProfileQuery } from '@/redux/services/profileApi';
import { useAppSelector } from '@/redux/hooks';

interface UserProps {}

const User: FunctionComponent<UserProps> = () => {
    const userId = useAppSelector((state) => state.auth.currentUser._id);
    const {
        data: profile,
        isError,
        isLoading,
        isSuccess,
        refetch,
    } = useGetProfileQuery({ userId }, { skip: !userId });

    console.log(profile);

    return (
        <div className="flex items-center w-full dark:text-white h-[150px] border border-neutral-300 rounded-xl shadow-lg p-4">
            <div className="w-[95px] h-[95px] flex justify-center items-center rounded-[50%] overflow-hidden border-2 dark:bg-white border-neutral-300">
                <img src={profile?.avatar} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-between h-[85px] ml-6">
                <p className="text-lg font-semibold">{profile?.firstName + ' ' + profile?.lastName}</p>
                <p onClick={() => refetch()} className="font-medium">
                    Admin
                </p>
                <p className="text-sm">{profile?.address || '----'}</p>
            </div>
            <EditButton href="/profile/edit-avatar" label="Edit" />
        </div>
    );
};

export default User;
