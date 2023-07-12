'use client';

import { FunctionComponent } from 'react';
import TextField from '@mui/material/TextField';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSignUpMutation } from '@/redux/services/authApi';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface FormSignUpProps {}

interface IFormSignUp {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const schema = yup
    .object({
        name: yup.string().required('Họ và tên là bắt buộc').min(10, 'Họ và tên phải trên 10 ký tự'),
        email: yup.string().email().required(),
        password: yup
            .string()
            .required('Password is a required field')
            .matches(
                /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/,
                'Mật khẩu nên có 8-20 ký tự và bao gồm ít nhất 1 chữ cái, 1 số và 1 ký tự đặc biệt!',
            ),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null || undefined], 'Xác nhận mật khẩu không khớp')
            .required('Xác nhận mật khẩu là bắc buộc'),
    })
    .required();

const FormSignUp: FunctionComponent<FormSignUpProps> = () => {
    const [signUp, resultSignUP] = useSignUpMutation();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<IFormSignUp>({ resolver: yupResolver(schema) });

    const onSubmit: SubmitHandler<IFormSignUp> = async (data) => {
        if (data) {
            try {
                await toast.promise(signUp(data).unwrap(), {
                    pending: 'Sign in is loading...',
                    success: 'Sign in successfully!!! 👌',
                    error: 'Sign in fail!!! 🤯',
                });
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className=" w-full flex flex-col items-center">
            <TextField
                id="outlined-basic"
                label="Name"
                {...register('name')}
                variant="outlined"
                sx={{ width: '70%', marginTop: '36px', marginBottom: '26px' }}
                error={!!errors.name}
                helperText={errors?.name?.message}
            />
            <TextField
                id="outlined-basic"
                label="Email"
                {...register('email')}
                variant="outlined"
                sx={{ width: '70%', marginBottom: '26px' }}
                error={!!errors.email}
                helperText={errors?.email?.message}
            />
            <TextField
                type="password"
                {...register('password')}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                sx={{ width: '70%', marginBottom: '26px' }}
                error={!!errors.password}
                helperText={errors?.password?.message}
            />
            <TextField
                type="password"
                {...register('confirmPassword')}
                id="outlined-basic"
                label="Confirm password"
                variant="outlined"
                sx={{ width: '70%' }}
                error={!!errors.confirmPassword}
                helperText={errors?.confirmPassword?.message}
            />
            <input type="submit" hidden id="submitFormSignUp" />
        </form>
    );
};

export default FormSignUp;
