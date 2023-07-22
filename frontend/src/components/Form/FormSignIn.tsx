'use client';

import { FunctionComponent, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSignInMutation } from '@/redux/services/authApi';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setInfoUser } from '@/redux/features/authSlice';
import { useRouter } from 'next/navigation';

interface FormSignInProps {}

interface IFormSignIn {
    email: string;
    password: string;
}

const schema = yup
    .object({
        email: yup.string().email().required('Email là bắt buộc!!!'),
        password: yup.string().required('Mật khẩu là bắt buộc!!!'),
    })
    .required();

const FormSignIn: FunctionComponent<FormSignInProps> = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const infoUser = useAppSelector((state) => state.auth.currentUser);
    console.log(infoUser);

    const [signIn, resultSignIn] = useSignInMutation();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<IFormSignIn>({ resolver: yupResolver(schema) });

    const onSubmit: SubmitHandler<IFormSignIn> = async (data) => {
        if (data) {
            try {
                await toast.promise(signIn(data).unwrap(), {
                    pending: 'Sign in is loading...',
                    success: 'Sign in successfully!!! 👌',
                    error: 'Sign in fail!!! 🤯',
                });
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        if (resultSignIn.isSuccess) {
            dispatch(setInfoUser(resultSignIn.data));
            router.push('/');
        }
    }, [dispatch, resultSignIn, router]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className=" w-full flex flex-col items-center">
            <TextField
                id="outlined-basic"
                label="Email"
                {...register('email')}
                variant="outlined"
                sx={{ width: '70%', marginTop: '36px', marginBottom: '26px' }}
                className="my-6"
                error={!!errors.email}
                helperText={errors.email?.message}
            />
            <TextField
                type="password"
                {...register('password')}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                sx={{ width: '70%' }}
                error={!!errors.password}
                helperText={errors.password?.message}
            />
            <input type="submit" hidden id="submitFormSignIn" />
        </form>
    );
};

export default FormSignIn;
