'use client';

import { ChangeEvent, FunctionComponent, useState } from 'react';
import EditButton from '../Button/EditButton';
import { Input } from 'antd';
import { Select } from 'antd';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { CiEdit } from 'react-icons/ci';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { handleEditPersonInformation } from '@/redux/features/profileSlice';
import { useForm, SubmitHandler } from 'react-hook-form';
import { MdOutlineAdd, MdOutlineCancel } from 'react-icons/md';
import { useEditPersonInformationMutation, useGetProfileQuery } from '@/redux/services/profileApi';
import { toast } from 'react-toastify';
import ButtonAdd from '../Button/ButtonAdd';
import SelectCountry from './SelectCountry';

type FormPersonInformation = {
    firstName: string;
    lastName: string;
    gender?: string;
    phone: string;
    birthDay: string;
    country: string;
    address: string;
};

interface PersonalInformationProps {}

const PersonalInformation: FunctionComponent<PersonalInformationProps> = () => {
    const [editPersonInformation, resultEditPersonInformation] = useEditPersonInformationMutation();
    const userId = useAppSelector((state) => state.auth.currentUser._id);
    const { data: profile } = useGetProfileQuery({ userId }, { skip: !userId });
    const [gender, setGender] = useState<string>('');
    const isEditPersonInformation = useAppSelector((state) => state.profile.isEditPersonInformation);
    const dispatch = useAppDispatch();

    const [formPersonInformation, setFormPersonInformation] = useState<FormPersonInformation>({
        birthDay: '',
        address: '',
        country: '',
        firstName: '',
        lastName: '',
        phone: '',
    });

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormPersonInformation>();
    const onSubmit: SubmitHandler<FormPersonInformation> = async (data) => {
        console.log(data);

        try {
            if (data) {
                await toast.promise(
                    editPersonInformation({ data: { ...formPersonInformation, gender }, userId }).unwrap(),
                    {
                        pending: 'Update person information is loading...',
                        success: 'Update person information successfully!!! 👌',
                        error: 'Update person information fail!!! 🤯',
                    },
                );
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleChangeGender = (value: string) => {
        setGender(value.toString());
    };
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormPersonInformation({ ...formPersonInformation, [event.target.name]: event.target.value });
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full min-h-[300px] dark:text-white border border-neutral-300 shadow-lg rounded-xl mt-8 p-4"
        >
            <div className="flex justify-between items-center mb-6">
                <p className="text-lg font-semibold">Personal Information</p>

                <span
                    onClick={() => dispatch(handleEditPersonInformation())}
                    className="flex cursor-pointer items-center ml-auto text-base font-medium py-2 px-4 border-2 border-neutral-300 dark:hover:text-[#444] hover:bg-neutral-100 hover-smooth rounded-3xl"
                >
                    <p className="mr-2">Edit</p>
                    <CiEdit className="text-2xl" />
                </span>
            </div>
            <div className="flex mb-6">
                <div className="min-w-[350px] mr-6">
                    <span className="text-neutral-500">First Name</span>
                    {isEditPersonInformation ? (
                        <Input onChange={handleChange} name="firstName" value={profile?.firstName} />
                    ) : (
                        <p className="font-semibold">{profile?.firstName}</p>
                    )}
                </div>

                <div className="min-w-[350px]">
                    <span className="text-neutral-500">Last Name</span>
                    {isEditPersonInformation ? (
                        <Input onChange={handleChange} name="lastName" value={profile?.lastName} />
                    ) : (
                        <p className="font-semibold">{profile?.lastName}</p>
                    )}
                </div>
            </div>

            <div className="flex mb-6">
                <div className="min-w-[350px] mr-6">
                    <span className="text-neutral-500">Email</span>
                    <p className="font-semibold">{profile?.email}</p>
                </div>

                <div className="min-w-[350px] flex flex-col">
                    <span className="text-neutral-500">Phone</span>
                    {isEditPersonInformation ? (
                        <Input onChange={handleChange} name="phone" value={profile?.phone} />
                    ) : (
                        <>
                            {profile?.phone ? (
                                <p className="font-semibold">+84 {profile?.phone}</p>
                            ) : (
                                <ButtonAdd label="Add phone" />
                            )}
                        </>
                    )}
                </div>
            </div>

            <div className="flex mb-6">
                <div className="min-w-[350px] flex flex-col mr-6">
                    <span className="text-neutral-500">Gender</span>
                    {isEditPersonInformation ? (
                        <Select
                            defaultValue={profile?.gender}
                            style={{ width: 120 }}
                            onChange={handleChangeGender}
                            options={[
                                { value: 'male', label: 'Male' },
                                { value: 'female', label: 'Female' },
                                { value: 'other', label: 'Other' },
                            ]}
                        />
                    ) : (
                        <>
                            {profile?.gender ? (
                                <p className="font-semibold">{profile.gender}</p>
                            ) : (
                                <ButtonAdd label="Add gender" />
                            )}
                        </>
                    )}
                </div>

                <div className="min-w-[350px] flex flex-col">
                    <span className="text-neutral-500">Birth Day</span>

                    {isEditPersonInformation ? (
                        <Input type="date" name="birthDay" onChange={handleChange} />
                    ) : (
                        <>
                            {profile?.birthDay ? (
                                <p className="font-semibold">24/05/2003</p>
                            ) : (
                                <ButtonAdd label="Add birth day" />
                            )}
                        </>
                    )}
                </div>
            </div>
            <div className="flex self-start mb-6">
                <div className="min-w-[350px] mr-6 flex flex-col">
                    <span className="text-neutral-500">Country</span>
                    {isEditPersonInformation ? (
                        <Input onChange={handleChange} name="country" />
                    ) : (
                        // <SelectCountry />
                        <>
                            {profile?.country ? (
                                <p className="font-semibold">{profile.country}</p>
                            ) : (
                                <ButtonAdd label="Add country" />
                            )}
                        </>
                    )}
                </div>

                <div className="min-w-[350px] flex flex-col">
                    <span className="text-neutral-500">City/State</span>
                    {isEditPersonInformation ? (
                        <Input onChange={handleChange} name="address" />
                    ) : (
                        <>
                            {profile?.address ? (
                                <p className="font-semibold">{profile.address}</p>
                            ) : (
                                <ButtonAdd label="Add city/State" />
                            )}
                        </>
                    )}
                </div>
            </div>
            {isEditPersonInformation && (
                <div className="flex items-center min-w-[30%] mb-6">
                    <span
                        onClick={() => dispatch(handleEditPersonInformation())}
                        className="cursor-pointer mr-6 flex items-center border-2 text-lg font-medium hover:bg-red-100 hover-smooth border-red-500 text-red-500 rounded-3xl py-1 px-6"
                    >
                        {/* <MdOutlineCancel /> */}
                        Cancel
                    </span>
                    <button
                        className="border-2 text-lg font-medium hover:bg-sky-100 hover-smooth text-[#0a66c2] border-[#0a66c2] rounded-3xl py-1 px-6"
                        type="submit"
                    >
                        Save Change
                    </button>
                </div>
            )}
        </form>
    );
};

export default PersonalInformation;
