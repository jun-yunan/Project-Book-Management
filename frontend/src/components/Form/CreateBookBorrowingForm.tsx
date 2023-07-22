'use client';

import { FunctionComponent, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useCreateBookBorrowingFormMutation, useGetBooksQuery } from '@/redux/services/bookApi';

import { toast } from 'react-toastify';

import { Select, SelectProps } from 'antd';
import axios from 'axios';

interface CreateBookBorrowingFormProps {}
export interface IForm {
    dueDate: string;
    member: string;
    bookTitle: string;
    quantity: number;
    librarian: string;
}

const CreateBookBorrowingForm: FunctionComponent<CreateBookBorrowingFormProps> = () => {
    const [bookTitle, setBookTitle] = useState<string>('');

    const { data, isLoading, isSuccess } = useGetBooksQuery(3);
    const [createBookBorrowingForm, resultCreateBookBorrowingForm] = useCreateBookBorrowingFormMutation();

    console.log(data);

    const schema = yup
        .object({
            dueDate: yup.string().required('Ngày trả sách là bắt buộc!'),
            member: yup.string().required('Email hoặc Id là trường bắt buộc!'),
            bookTitle: yup.string(),
            librarian: yup.string().required('Email hoặc Id là trường bắt buộc!'),
            quantity: yup
                .number()
                .positive('Phải là số nguyên')
                .integer('Phải là số nguyên')
                .required('Số lượng sách mượn là bắt buộc!'),
        })
        .required();
    const [currentDate, setCurrentDate] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>({ resolver: yupResolver(schema) });

    axios('', { withCredentials: true });

    const onSubmit: SubmitHandler<IForm> = async (data) => {
        try {
            if (data && bookTitle) {
                await toast.promise(createBookBorrowingForm({ ...data, bookTitle }).unwrap(), {
                    pending: 'Create Book Borrowing Form is loading...',
                    success: 'Create Book Borrowing Form successfully!!! 👌',
                    error: 'Create Book Borrowing Form fail!!! 🤯',
                });
            }
            toast.warn('Chọn sách là bắt buộc!!!');
        } catch (error) {
            console.error(error);

            toast.error(
                (error as { data: { message: string; error: {} | string }; status: number }).data.message ||
                    (error as { data: { message: string; error: string }; status: number }).data.error,
            );
        }
    };

    useEffect(() => {
        const dateObj = new Date();
        const year = dateObj.getFullYear();
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const day = dateObj.getDate().toString().padStart(2, '0');
        const today = `${year}-${month}-${day}`;
        setCurrentDate(today);
    }, []);

    const options: SelectProps['options'] = [];

    data?.books.map((book) => options.push({ label: book.name.toString(), value: book.name.toString() }));

    const handleChange = (value: string) => {
        setBookTitle(value.toString());
    };

    return (
        <form className="w-[80%]" onSubmit={handleSubmit(onSubmit)}>
            <Select
                mode="multiple"
                style={{ width: '100%', marginBottom: '16px' }}
                placeholder="Chọn Sách"
                onChange={handleChange}
                options={options}
                className="text-lg"
            />

            <TextField
                type="date"
                defaultValue={currentDate}
                sx={{ width: '100%', marginBottom: '16px' }}
                className="rounded-sm"
                id="outlined-basic"
                label="Ngày trả"
                variant="outlined"
                {...register('dueDate')}
                error={!!errors.dueDate}
                helperText={errors?.dueDate?.message}
            />
            <TextField
                type="number"
                sx={{ width: '100%', marginBottom: '16px' }}
                className="rounded-sm"
                id="outlined-basic"
                label="Số lượng"
                variant="outlined"
                {...register('quantity')}
                error={!!errors.quantity}
                helperText={errors?.quantity?.message}
            />
            <TextField
                sx={{ width: '100%', marginBottom: '16px' }}
                className="rounded-sm"
                id="outlined-basic"
                label="Email thành viên hoặc ID"
                variant="outlined"
                {...register('member')}
                error={!!errors.member}
                helperText={errors?.member?.message}
            />
            <TextField
                sx={{ width: '100%', marginBottom: '16px' }}
                className="rounded-sm"
                id="outlined-basic"
                label="Email thủ thư hoặc ID"
                variant="outlined"
                {...register('librarian')}
                error={!!errors.librarian}
                helperText={errors?.librarian?.message}
            />
            <input type="submit" id="submitForm" hidden />
        </form>
    );
};

export default CreateBookBorrowingForm;
