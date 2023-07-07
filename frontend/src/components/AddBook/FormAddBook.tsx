/* eslint-disable @next/next/no-img-element */
'use client';

import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import { useForm, SubmitHandler, set } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { FormBook } from '@/types/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useAddBookMutation } from '@/redux/services/bookApi';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormAddBookProps {}

const schema = yup
    .object({
        name: yup.string().required(),
        publishingDate: yup.string().required(),
        price: yup.number().positive().integer().required(),
        image: yup.string().required(),
        numberPage: yup.number().positive().integer().required(),
        summary: yup.string().required(),
        publishingCompany: yup.string().required(),
        author: yup.string().required(),
    })
    .required();

const FormAddBook = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [previewImage, setPreviewImage] = useState('');
    const [fileImage, setFileImage] = useState<File | null>(null);

    const [addBook, resultAddBook] = useAddBookMutation();

    useEffect(() => {
        const dateObj = new Date();
        const year = dateObj.getFullYear();
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const day = dateObj.getDate().toString().padStart(2, '0');
        const today = `${year}-${month}-${day}`;
        setCurrentDate(today);
    }, []);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormBook>({
        // defaultValues: {},
        resolver: yupResolver(schema),
    });
    const onSubmit: SubmitHandler<FormBook> = async (data) => {
        try {
            const formData = new FormData();
            fileImage && formData.append('image', fileImage);
            formData.append('data', JSON.stringify(data));
            if (data) {
                await toast.promise(addBook(formData).unwrap(), {
                    pending: 'Add book is pending',
                    success: 'Add book resolved 👌',
                    error: 'Add book rejected 🤯',
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileImage(file);
            const imageURL = URL.createObjectURL(file);
            setPreviewImage(imageURL);
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full  items-center min-h-[700px] text-[#161617]"
        >
            <TextField
                sx={{ width: '70%', marginBottom: '16px', color: 'white' }}
                className="rounded-sm"
                id="outlined-basic"
                label="Tên sách"
                variant="outlined"
                {...register('name')}
                error={!!errors.name}
                helperText={errors?.name?.message}
            />
            <TextField
                sx={{ width: '70%', marginBottom: '16px' }}
                className="rounded-sm"
                id="outlined-basic"
                label="Tác giả"
                variant="outlined"
                {...register('author')}
                error={!!errors.author}
                helperText={errors?.author?.message}
            />
            <TextField
                sx={{ width: '70%', marginBottom: '16px' }}
                type="number"
                className="rounded-sm"
                id="outlined-basic"
                label="Số trang"
                variant="outlined"
                {...register('numberPage')}
                error={!!errors.numberPage}
                helperText={errors?.numberPage?.message}
            />
            <TextField
                type="number"
                sx={{ width: '70%', marginBottom: '16px' }}
                className="rounded-sm"
                id="outlined-basic"
                label="Giá sách"
                variant="outlined"
                {...register('price')}
                error={!!errors.price}
                helperText={errors?.price?.message}
            />
            <TextField
                sx={{ width: '70%', marginBottom: '16px' }}
                className="rounded-sm"
                id="outlined-basic"
                label="Nhà xuất bản"
                variant="outlined"
                {...register('publishingCompany')}
                error={!!errors.publishingCompany}
                helperText={errors?.publishingCompany?.message}
            />
            <TextField
                type="date"
                defaultValue={currentDate}
                sx={{ width: '70%', marginBottom: '16px' }}
                className="rounded-sm"
                id="outlined-basic"
                label="Ngày xuất bản"
                variant="outlined"
                {...register('publishingDate')}
                error={!!errors.publishingDate}
                helperText={errors?.publishingDate?.message}
            />

            <textarea
                placeholder="Mô tả sách..."
                className="text-[#161617] bg-transparent border border-neutral-400 w-[70%] p-4"
                rows={5}
                {...register('summary')}
            />
            <div className="w-[70%] h-[200px] flex items-center justify-between mt-[16px]">
                <div className=" w-[70%] h-full rounded-lg border-2 border-neutral-400 shadow-xl">
                    {previewImage ? (
                        <img src={previewImage} alt="" className="object-cover w-full h-full" />
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="flex flex-col  self-end">
                    <label
                        htmlFor="file-image"
                        className="text-[#161617] flex items-center justify-between mb-6 cursor-pointer px-4 rounded-lg hover:bg-[#161617] hover-smooth hover:text-white border-2 border-[#161617] text-lg font-medium"
                    >
                        <FontAwesomeIcon icon={faImage} className="mr-2" />
                        <p>Chọn ảnh</p>
                    </label>
                    <button
                        onClick={() => setPreviewImage('')}
                        className="text-[#161617] cursor-pointer px-4 rounded-lg hover:bg-[#161617] hover-smooth hover:text-white border-2 border-[#161617] text-lg font-medium"
                    >
                        <FontAwesomeIcon icon={faTrash} className="mr-2" />
                        Xoá ảnh
                    </button>
                </div>
            </div>
            <input
                type="file"
                hidden
                id="file-image"
                {...register('image')}
                accept="image/*"
                onChange={handleImageUpload}
            />

            <div className="w-full border border-neutral-300 my-10"></div>

            <button
                type="submit"
                className="text-[#161617]  w-[40%] rounded-lg hover:bg-[#161617] hover-smooth hover:text-white self-end mr-[15%] mb-6 border-2 border-[#161617] px-6 py-2 text-lg font-medium"
            >
                Lưu thông tin
            </button>
        </form>
    );
};

export default FormAddBook;
