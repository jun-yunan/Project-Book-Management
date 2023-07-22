import FormSignIn from '@/components/Form/FormSignIn';
import { FunctionComponent } from 'react';

interface SignInPageProps {}

const SignInPage: FunctionComponent<SignInPageProps> = () => {
    return (
        <div className=" w-full h-full  bg-opacity-40 flex justify-center">
            <div className="w-[45%] h-[400px] bg-white mt-[100px] flex flex-col items-center rounded-xl shadow-xl">
                <p className="text-2xl font-semibold my-6">Đăng nhập tài khoản của bạn</p>
                <div className="border  bg-neutral-300 w-full"></div>
                <FormSignIn />
                <label
                    htmlFor="submitFormSignIn"
                    className="flex items-center my-10 bg-sky-500 px-8 py-2 text-white text-xl font-semibold rounded-xl cursor-pointer"
                >
                    <p>Đăng nhập</p>
                </label>
            </div>
        </div>
    );
};

export default SignInPage;
