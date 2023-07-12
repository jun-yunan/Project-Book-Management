/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react';

interface LayoutAddBookProps {
    children: React.ReactNode;
}

const LayoutAddBook: FunctionComponent<LayoutAddBookProps> = ({ children }) => {
    return (
        <div className="w-full min-h-[700px] flex flex-col items-center relative">
            <img
                // src="https://images.pexels.com/photos/1470162/pexels-photo-1470162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                src="https://images.pexels.com/photos/762686/pexels-photo-762686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-full object-cover"
            />
            {children}
        </div>
    );
};

export default LayoutAddBook;
