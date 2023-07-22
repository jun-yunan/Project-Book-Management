'use client';

import Link from 'next/link';
import { FunctionComponent } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ItemLink from './ItemLink';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

import MyAccount from './MyAccount';
import SwitchTheme from '../Button/SwitchTheme';

import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchHeader from './SearchHeader';
import Tippy from '@tippyjs/react';
import { useAppDispatch } from '@/redux/hooks';
import { handleShowNavbar } from '@/redux/features/navbarSlice';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
    const dispatch = useAppDispatch();
    const handleShowMenu = () => {
        dispatch(handleShowNavbar());
    };
    return (
        <div className="w-full h-[75px] flex items-center dark:bg-black bg-white text-[#444] dark:text-white justify-center fixed top-0 left-0 z-50">
            <div className="w-[80%] h-full flex items-center justify-between">
                <div className="text-xl flex items-center">
                    <button className="" onClick={handleShowMenu}>
                        <Tippy content="Menu">
                            <MenuRoundedIcon sx={{ fontSize: 30, marginRight: '24px' }} />
                        </Tippy>
                    </button>
                    <Link href={'/'} className="flex items-center">
                        <FontAwesomeIcon icon={faBookOpen} className="mr-2 text-3xl" />
                        <p className="text-3xl font-semibold">Book</p>
                    </Link>
                </div>
                {/* <ItemLink path="/">
                    <HomeRoundedIcon />
                    <p>Trang chủ</p>
                </ItemLink> */}

                {/* <ItemLink path="/add-book">
                    <AddCircleOutlineRoundedIcon />
                    <p>Thêm sách</p>
                </ItemLink> */}

                {/* <ItemLink path="/create-book-borrowing-form">
                    <AddCircleOutlineRoundedIcon />
                    <p>Tạo phiếu mượn sách</p>
                </ItemLink> */}

                <div className="flex items-center min-w-[40%] justify-between">
                    <SearchHeader />
                    <div className="p-2 border-2 border-neutral-300 rounded-[50%] hover:bg-gray-100 dark:hover:text-[#444] cursor-pointer hover-smooth">
                        <NotificationsNoneRoundedIcon sx={{ fontSize: 25 }} />
                    </div>
                    <SwitchTheme />
                    <MyAccount />
                </div>
            </div>
        </div>
    );
};

export default Header;
