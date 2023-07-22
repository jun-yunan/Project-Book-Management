/* eslint-disable @next/next/no-img-element */
import FormAddBook from '@/components/AddBook/FormAddBook';
import SkeletonFormAddBook from '@/components/Skeleton/SkeletonFormAddBook';
import { dividerClasses } from '@mui/material';
import { FunctionComponent } from 'react';

interface AddBookProps {}

const AddBook: FunctionComponent<AddBookProps> = () => {
    return (
        <div className="w-[90%] h-[800px] shadow-xl rounded-xl m-8 bg-white bg-opacity-90 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mt-4">Nhập thông tin sách</h2>
            <div className="border border-neutral-300 w-full my-6"></div>
            <FormAddBook />
            <div className="w-full border border-neutral-300 my-10"></div>

            <label
                htmlFor="submitForm"
                className="text-[#161617] flex justify-center cursor-pointer w-[40%] rounded-lg hover:bg-[#161617] hover-smooth hover:text-white mb-6 border-2 border-[#161617] px-6 py-2 text-xl font-medium"
            >
                <p>Lưu thông tin</p>
            </label>
        </div>
    );
};

export default AddBook;
