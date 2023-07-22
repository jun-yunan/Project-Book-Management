/* eslint-disable @next/next/no-img-element */
'use client';
import { useAppSelector } from '@/redux/hooks';
import { useChangeAvatarMutation, useGetProfileQuery } from '@/redux/services/profileApi';

import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import { toast } from 'react-toastify';

interface ChangeAvatarProps {}

const ChangeAvatar: FunctionComponent<ChangeAvatarProps> = () => {
    const userId = useAppSelector((state) => state.auth.currentUser._id);
    const { data: profile } = useGetProfileQuery({ userId }, { skip: !userId });
    const [imagePreview, setImagePreview] = useState<string>((profile?.avatar as string) || '');
    const [fileImage, setFileImage] = useState<File | null>(null);
    const [changeAvatar, resultChangeAvatar] = useChangeAvatarMutation();

    const handlePreviewImage = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        const reader = new FileReader();
        if (file) {
            setFileImage(file);
            reader.onload = (e) => {
                setImagePreview(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            fileImage && formData.append('image', fileImage);
            await toast.promise(changeAvatar({ data: formData, userId }).unwrap(), {
                pending: 'Update avatar is pending',
                success: 'Update avatar resolved 👌',
                error: 'Update avatar rejected 🤯',
            });
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="w-full flex flex-col">
            <div className="w-[300px] mx-auto h-[300px] overflow-hidden border-2 border-neutral-300 rounded-[50%] bg-white my-8">
                <img src={imagePreview} alt="" className="w-[300px] h-[300px] object-cover" />
            </div>
            <form onSubmit={handleSubmit} hidden>
                <input type="file" hidden id="choseImage" accept="image/*" onChange={handlePreviewImage} />
                <input type="submit" hidden id="submitFormChangeAvatar" />
            </form>
            <div className="border-t border-t-neutral-300 w-full mb-6"></div>
            <div className="w-[60%] mx-auto  flex items-center justify-between">
                <label
                    htmlFor="choseImage"
                    className="text-lg dark:bg-white dark:hover:bg-sky-100 font-semibold border-2 border-[#0a66c2] rounded-3xl px-6 py-1 cursor-pointer text-[#0a66c2] hover:bg-sky-100 hover-smooth"
                >
                    Chose Image
                </label>
                <label
                    htmlFor="submitFormChangeAvatar"
                    className="text-lg dark:bg-white dark:hover:bg-sky-100 font-semibold border-2 border-[#0a66c2] rounded-3xl px-6 py-1 cursor-pointer text-[#0a66c2] hover:bg-sky-100 hover-smooth"
                >
                    Save Change
                </label>
            </div>
        </div>
    );
};

export default ChangeAvatar;
