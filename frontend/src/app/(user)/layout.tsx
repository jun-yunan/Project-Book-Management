import ItemMenu from '@/components/Profile/ItemMenu';
import Link from 'next/link';
import { FunctionComponent } from 'react';

interface LayoutProfileProps {
    children: React.ReactNode;
}

const LayoutProfile: FunctionComponent<LayoutProfileProps> = ({ children }) => {
    return (
        <div className="w-full dark:text-white flex flex-col items-center  text-[#161617]">
            <div className="w-full min-h-[700px]  shadow-lg bg-gray-100 dark:bg-black overflow-hidden flex flex-col items-center self-end">
                <p className="text-2xl font-medium self-start text-[#444] dark:text-[#ededed] ml-[32px] my-6">
                    Account Setting
                </p>
                <div className="flex w-[95%] h-[90%] bg-white dark:bg-[#1f1f1f] rounded-lg shadow-lg p-6 mb-6">
                    <div className="flex items-start flex-col w-[20%] border-r-2 border-r-neutral-300">
                        <ItemMenu href="/" label="My Profile" />
                        <ItemMenu href="" label="Security" />
                        <ItemMenu href="" label="Teams" />
                        <ItemMenu href="" label="Teams Member" />
                        <Link
                            href={'/'}
                            className="font-medium rounded-3xl hover-smooth py-4 px-5 text-red-500 hover:text-red-500 hover:font-bold hover:border hover:border-red-500 hover:bg-red-50 mt-10 "
                        >
                            Delete Account
                        </Link>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LayoutProfile;
