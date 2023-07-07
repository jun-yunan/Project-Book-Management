/* eslint-disable @next/next/no-img-element */
import FormAddBook from '@/components/AddBook/FormAddBook';
import SkeletonFormAddBook from '@/components/Skeleton/SkeletonFormAddBook';
import { dividerClasses } from '@mui/material';
import { FunctionComponent } from 'react';

interface AddBookProps {}

const AddBook: FunctionComponent<AddBookProps> = () => {
    return (
        <div className="absolute w-[50%] min-h-[700px] shadow-xl rounded-xl m-8 bg-white bg-opacity-75 left-0 top-0 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mt-4">Nhập thông tin sách</h2>
            <div className="border border-neutral-300 w-full my-6"></div>
            <FormAddBook />
        </div>
    );
};

export default AddBook;
