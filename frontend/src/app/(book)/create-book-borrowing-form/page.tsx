'use client';

import CreateBookBorrowingForm from '@/components/Form/CreateBookBorrowingForm';
import { FunctionComponent } from 'react';

interface CreateBookBorrowingFormPageProps {}

const CreateBookBorrowingFormPage: FunctionComponent<CreateBookBorrowingFormPageProps> = () => {
    return (
        <div className="w-[40%] min-h-[500px] rounded-lg shadow-lg  bg-white bg-opacity-70 mt-8 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mt-4">Nhập thông tin mượn sách</h2>
            <div className="border border-neutral-300 w-full my-6"></div>
            <CreateBookBorrowingForm />
            <div className="border border-neutral-300 w-full my-6"></div>
            <label
                htmlFor="submitForm"
                className="mb-6 px-6 py-2 border-2 border-[#161617] text-xl font-semibold rounded-lg hover:bg-[#161617] hover:text-white hover-smooth cursor-pointer"
            >
                <p>Tạo phiếu mượn</p>
            </label>
        </div>
    );
};

export default CreateBookBorrowingFormPage;
