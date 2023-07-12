/* eslint-disable @next/next/no-img-element */
'use client';

import {
    faGear,
    faQuestion,
    faRightFromBracket,
    faRightToBracket,
    faUser,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useAppSelector } from '@/redux/hooks';
import CustomizedSwitches from '../Button/CustomizedSwitches';

interface IsLoginProps {}

const IsLogin: FunctionComponent<IsLoginProps> = () => {
    const currentUser = useAppSelector((state) => state.auth.currentUser);
    return (
        <Tippy
            interactive
            render={(attrs) => (
                <div
                    className="box bg-white min-w-[300px] min-h-[300px]  flex flex-col items-center text-lg font-semibold border text-[#161617] border-neutral-300 rounded-lg shadow-lg"
                    tabIndex={-1}
                    {...attrs}
                >
                    <div className="flex flex-col items-center w-full h-full p-4">
                        <div className="flex items-center">
                            {currentUser.avatar ? (
                                <img src={currentUser.avatar} alt="" />
                            ) : (
                                <div className="mr-2 flex items-center justify-center overflow-hidden rounded-[50%] w-[60px] h-[60px] border-2 border-[#0a66c2]">
                                    <FontAwesomeIcon icon={faUser} className="text-4xl" />
                                </div>
                            )}
                            <div className="flex flex-col justify-between">
                                <p>{currentUser.name}</p>
                                <p>---</p>
                            </div>
                        </div>
                        <Link
                            className="my-4 border-2 border-[#0a66c2] hover-smooth w-[90%] rounded-2xl hover:bg-[#0a66c2] hover:bg-opacity-20 items-center flex justify-center"
                            href="/signIn"
                        >
                            <p className="text-lg font-medium">Hồ sơ của tôi</p>
                        </Link>
                        <div className="border border-neutral-300 w-full mb-4"></div>
                        <CustomizedSwitches />
                        <Link href={'/setting'} className="flex items-center self-start">
                            <FontAwesomeIcon icon={faGear} className="mr-2" />
                            <p>Setting</p>
                        </Link>
                        <Link href={'/help'} className="flex items-center self-start">
                            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
                            <p>Hỗ trợ</p>
                        </Link>
                        <div className="border border-neutral-300 w-full my-4"></div>

                        <Link
                            className="hover:bg-[#0a66c2] hover:bg-opacity-20 w-[90%] rounded-2xl border-2 border-[#0a66c2] hover-smooth items-center flex justify-center"
                            href="/signUp"
                        >
                            <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />
                            <p>Đăng xuất</p>
                        </Link>
                    </div>
                </div>
            )}
        >
            <div className="flex items-center cursor-pointer">
                <AccountCircleRoundedIcon className="mr-1" />
                <p>{currentUser.name}</p>
            </div>
        </Tippy>
    );
};

export default IsLogin;
