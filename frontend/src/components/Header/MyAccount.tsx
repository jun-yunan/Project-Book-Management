/* eslint-disable @next/next/no-img-element */
'use client';

import { FunctionComponent } from 'react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faRightToBracket, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '@/redux/hooks';
import IsLogin from './IsLogin';
import IconUser from './IconUser';

interface MyAccountProps {}

const MyAccount: FunctionComponent<MyAccountProps> = () => {
    const currentUser = useAppSelector((state) => state.auth.currentUser);

    if (currentUser.isLogin) {
        return <IsLogin />;
    }

    return (
        <Tippy
            placement="bottom"
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
            <Link
                href={'/signIn'}
                className="tex-4xl text-[#0a66c2] dark:bg-sky-500 dark:hover:bg-white dark:hover:text-[#0a66c2] dark:text-white border-2 border-[#0a66c2] hover-smooth hover:bg-sky-100 py-2 px-6 rounded-3xl font-semibold"
            >
                <p>Login</p>
            </Link>
        </Tippy>
    );
};

export default MyAccount;
