'use client';

import Link from 'next/link';
import { FunctionComponent } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ItemLink from './ItemLink';
import Image from 'next/image';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import MyAccount from './MyAccount';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
    return (
        <div className="w-full h-[75px] flex items-center bg-neutral-700 justify-center fixed top-0 left-0 z-50 shadow-xl">
            <div className="w-[80%] h-full flex items-center justify-between">
                <div className="text-xl flex items-center">
                    <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
                    <p>Book</p>
                </div>
                <ItemLink path="/">
                    <HomeRoundedIcon />
                    <p>Trang chủ</p>
                </ItemLink>

                <ItemLink path="/add-book">
                    <AddCircleOutlineRoundedIcon />
                    <p>Thêm sách</p>
                </ItemLink>

                <ItemLink path="/create-book-borrowing-form">
                    <AddCircleOutlineRoundedIcon />
                    <p>Tạo phiếu mượn sách</p>
                </ItemLink>

                <div className="flex items-center justify-between bg-white rounded-lg overflow-hidden px-3 py-2 w-[260px] phone:w-[150px] focus-within:w-[300px] transition-all duration-500 ease-in-out">
                    <input
                        type="text"
                        placeholder="Tìm kiếm sách?..."
                        className="bg-transparent outline-none border-none w-[80%] text-[#161617]"
                    />
                    <Link href={'/'}>
                        <SearchRoundedIcon className="text-[#161617]" />
                    </Link>
                </div>
                <MyAccount />
            </div>
        </div>
    );
};

export default Header;
