import FormSignUp from '@/components/Form/FormSignUp';
import { FunctionComponent } from 'react';

interface SignUpPageProps {}

const SignUpPage: FunctionComponent<SignUpPageProps> = () => {
    return (
        <div className=" w-full h-full bg-neutral-300 bg-opacity-40 flex justify-center">
            <div className="w-[45%] h-[550px] bg-white mt-[50px] flex flex-col items-center rounded-xl shadow-xl">
                <p className="text-2xl font-semibold my-6">Đăng ký tài khoản của bạn</p>
                <div className="border  bg-neutral-300 w-full"></div>
                <FormSignUp />
                <label
                    htmlFor="submitFormSignUp"
                    className="flex items-center my-10 bg-sky-500 px-8 py-2 text-white text-xl font-semibold rounded-xl cursor-pointer"
                >
                    <p>Đăng ký</p>
                </label>
            </div>
        </div>
    );
};

export default SignUpPage;
