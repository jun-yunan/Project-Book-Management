/* eslint-disable @next/next/no-img-element */
'use client';

import { FunctionComponent } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '@/redux/hooks';
import IsLogin from './IsLogin';

interface MyAccountProps {}

const MyAccount: FunctionComponent<MyAccountProps> = () => {
    const currentUser = useAppSelector((state) => state.auth.currentUser);

    if (currentUser.isLogin) {
        return <IsLogin />;
    }

    return (
        <Tippy
            interactive
            render={(attrs) => (
                <div
                    className="box bg-white w-[300px] min-h-[100px] justify-around flex flex-col items-center text-lg font-semibold border text-[#161617] border-neutral-300 rounded-lg shadow-lg"
                    tabIndex={-1}
                    {...attrs}
                >
                    <Link
                        className=" hover:bg-neutral-200 hover-smooth w-full py-4 items-center flex justify-center"
                        href="/signIn"
                    >
                        <FontAwesomeIcon icon={faRightToBracket} className="mr-2" />
                        <p>Đăng nhập</p>
                    </Link>
                    <Link
                        className="hover:bg-neutral-200 hover-smooth w-full py-4 items-center flex justify-center"
                        href="/signUp"
                    >
                        <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                        <p>Đăng ký</p>
                    </Link>
                </div>
            )}
        >
            <div className="flex items-center cursor-pointer">
                <AccountCircleRoundedIcon className="mr-1" />
                <p>My Account</p>
            </div>
        </Tippy>
    );
};

export default MyAccount;
