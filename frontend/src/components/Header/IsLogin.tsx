/* eslint-disable @next/next/no-img-element */
'use client';

import {
    faChevronDown,
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
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logOut } from '@/redux/features/authSlice';
import { useRouter } from 'next/navigation';
import { useGetProfileQuery } from '@/redux/services/profileApi';

interface IsLoginProps {}

const IsLogin: FunctionComponent<IsLoginProps> = () => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector((state) => state.auth.currentUser._id);
    const { data: profile } = useGetProfileQuery({ userId }, { skip: !userId });
    const router = useRouter();
    const handleLogOut = () => {
        dispatch(logOut());
        router.push('/signIn');
    };
    return (
        <Tippy
            placement="bottom"
            interactive
            render={(attrs) => (
                <div
                    className="box bg-white dark:bg-[#1f1f1f] dark:text-white min-w-[250px] min-h-[300px]  flex flex-col items-center text-base font-semibold border text-[#161617] border-neutral-300 rounded-lg shadow-lg"
                    tabIndex={-1}
                    {...attrs}
                >
                    <div className="flex flex-col items-center w-full h-full p-4">
                        <div className="flex items-center">
                            <div className="mr-2 shadow-lg border-2 border-[#0a66c2] flex flex-col items-center justify-center w-[55px] h-[55px] overflow-hidden rounded-[50%]">
                                {profile?.avatar ? (
                                    <img src={profile.avatar} alt="" className="w-full h-full object-cover" />
                                ) : (
                                    <FontAwesomeIcon icon={faUser} className="text-4xl" />
                                )}
                            </div>
                            <div className="flex flex-col justify-between">
                                <p className="text-base font-semibold">
                                    {((profile?.firstName as string) + ' ' + profile?.lastName) as string}
                                </p>
                                <p className="text-base font-semibold">---</p>
                            </div>
                        </div>
                        <Link
                            className="my-4 border-2  border-[#0a66c2]  hover-smooth w-full rounded-2xl hover:bg-[#0a66c2] hover:bg-opacity-20 items-center flex justify-center"
                            href="/profile"
                        >
                            <p className="text-base font-medium">Hồ sơ của tôi</p>
                        </Link>
                        <div className="border border-neutral-300 w-full mb-4"></div>
                        {/* <CustomizedSwitches /> */}
                        <Link href={'/setting'} className="flex items-center self-start">
                            <FontAwesomeIcon icon={faGear} className="mr-2" />
                            <p>Setting</p>
                        </Link>
                        <Link href={'/help'} className="flex items-center self-start">
                            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
                            <p>Hỗ trợ</p>
                        </Link>
                        <div className="border border-neutral-300 w-full my-4"></div>

                        <button
                            onClick={handleLogOut}
                            className="hover:bg-[#0a66c2] hover:bg-opacity-20 w-full rounded-2xl border-2 border-[#0a66c2] hover-smooth items-center flex justify-center"
                        >
                            <FontAwesomeIcon icon={faRightFromBracket} className="mr-2" />
                            <p>Đăng xuất</p>
                        </button>
                    </div>
                </div>
            )}
        >
            <div className="flex items-center cursor-pointer">
                <div className="w-[50px] h-[50px] mr-2 flex items-center justify-center border-2 dark:border-white bg-white border-neutral-300 rounded-[50%] overflow-hidden">
                    {profile?.avatar ? <img src={profile.avatar} alt="" /> : <div></div>}
                </div>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-xl dark:text-white text-gray-500 font-light"
                />
            </div>
        </Tippy>
    );
};

export default IsLogin;
