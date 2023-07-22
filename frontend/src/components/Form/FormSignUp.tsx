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
    firstName: string;
    lastName: string;
    // name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const schema = yup
    .object({
        // name: yup.string().required('Họ và tên là bắt buộc').min(10, 'Họ và tên phải trên 10 ký tự'),
        firstName: yup.string().required('Họ và tên là bắt buộc'),
        lastName: yup.string().required('Họ và tên là bắt buộc'),
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
        console.log(data);

        if (data) {
            try {
                await toast.promise(signUp(data).unwrap(), {
                    pending: 'Sign up is loading...',
                    success: 'Sign up successfully!!! 👌',
                    error: 'Sign up fail!!! 🤯',
                });
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className=" w-full  flex flex-col items-center">
            <div className="flex items-center w-[70%] justify-between">
                <TextField
                    id="outlined-basic"
                    label="Fist Name"
                    {...register('firstName')}
                    variant="outlined"
                    sx={{ width: '48%', marginTop: '36px', marginBottom: '26px' }}
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                />
                <TextField
                    id="outlined-basic"
                    label="Last Name"
                    {...register('lastName')}
                    variant="outlined"
                    sx={{ width: '48%', marginTop: '36px', marginBottom: '26px' }}
                    error={!!errors.lastName}
                    helperText={errors?.lastName?.message}
                />
            </div>
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
