/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react';

interface LayoutAuthProps {
    children: React.ReactNode;
}

const LayoutAuth: FunctionComponent<LayoutAuthProps> = ({ children }) => {
    return (
        <div className="w-full h-[700px] relative overflow-hidden flex flex-col items-center">
            <img
                src="https://images.pexels.com/photos/68562/pexels-photo-68562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-full h-full object-cover blur-sm  grayscale absolute"
            />
            <div className="z-10 w-full h-full flex justify-center">{children}</div>
        </div>
    );
};

export default LayoutAuth;
