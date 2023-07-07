import { FunctionComponent } from 'react';
import FormAddBook from '../AddBook/FormAddBook';

interface SkeletonFormAddBookProps {}

const SkeletonFormAddBook: FunctionComponent<SkeletonFormAddBookProps> = () => {
    return (
        <div className="animate-pulse absolute w-[50%] min-h-[700px] shadow-xl rounded-xl m-8 bg-white bg-opacity-75 left-0 top-0 flex flex-col items-center">
            <h2 className="text-2xl font-semibold rounded-lg mt-4 py-8 w-[70%] bg-neutral-300"></h2>
            <div className="border border-neutral-300 w-full my-6"></div>
            <div className="py-8 rounded-lg w-[70%] bg-neutral-300 mb-[16px]"></div>
            <div className="py-8 rounded-lg w-[70%] bg-neutral-300 mb-[16px]"></div>
            <div className="py-8 rounded-lg w-[70%] bg-neutral-300 mb-[16px]"></div>
            <div className="py-8 rounded-lg w-[70%] bg-neutral-300 mb-[16px]"></div>
            <div className="py-8 rounded-lg w-[70%] bg-neutral-300 mb-[16px]"></div>
            <div className="py-8 rounded-lg w-[70%] bg-neutral-300 mb-[16px]"></div>
            <div className="py-8 rounded-lg w-[70%] bg-neutral-300 mb-[16px]"></div>
            <div className="py-8 rounded-lg w-[70%] bg-neutral-300 mb-[16px]"></div>
        </div>
    );
};

export default SkeletonFormAddBook;
