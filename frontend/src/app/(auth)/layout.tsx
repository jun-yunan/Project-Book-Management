/* eslint-disable @next/next/no-img-element */
import { FunctionComponent } from 'react';

interface LayoutAuthProps {
    children: React.ReactNode;
}

const LayoutAuth: FunctionComponent<LayoutAuthProps> = ({ children }) => {
    return (
        <div className="w-full min-h-[500px] bg-white relative overflow-hidden">
            <img
                src="https://images.pexels.com/photos/68562/pexels-photo-68562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="w-full h-full object-cover blur-md grayscale"
            />
            <div className="absolute w-full h-full top-0 left-0">{children}</div>
        </div>
    );
};

export default LayoutAuth;
