'use client';

import { FunctionComponent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface FormEditPersonInformationProps {}

interface InputsFormPersonInformation {}

const FormEditPersonInformation: FunctionComponent<FormEditPersonInformationProps> = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<InputsFormPersonInformation>();
    const onSubmit: SubmitHandler<InputsFormPersonInformation> = (data) => console.log(data);
    return (
        <div className="flex w-full flex-col">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full">
                <div className="mb-[24px]"></div>

                <TextField
                    id="outlined-basic"
                    label="First name"
                    variant="outlined"
                    sx={{ marginBottom: '24px' }}
                />
                <TextField
                    id="outlined-basic"
                    label="Last name"
                    variant="outlined"
                    sx={{ marginBottom: '24px' }}
                />
                <TextField
                    id="outlined-basic"
                    label="Gender"
                    variant="outlined"
                    sx={{ marginBottom: '24px' }}
                />
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    sx={{ marginBottom: '24px' }}
                />

                <input type="submit" hidden id="submitFormPersonInformation" />
            </form>
            <label
                htmlFor="submitFormPersonInformation"
                className="px-6 py-1 self-end text-lg text-[#0a66c2] w-[45%] cursor-pointer hover:bg-sky-100 hover-smooth flex justify-center  rounded-3xl font-semibold border-2 border-[#0a66c2]"
            >
                <p>Save Change</p>
            </label>
        </div>
    );
};

export default FormEditPersonInformation;
