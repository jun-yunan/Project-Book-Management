'use client';

import { useAppSelector } from '@/redux/hooks';
import { FunctionComponent } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import Link from 'next/link';

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
    const isShowNavbar = useAppSelector((state) => state.navbar.isShowNavbar);

    if (isShowNavbar) {
        return (
            <div className="w-[20%] h-full">
                <div className="w-full h-full p-4">
                    <p>Menu</p>
                    <Link href="/" className="flex items-center">
                        <HomeOutlinedIcon />
                        <p>Home</p>
                    </Link>
                    <Link href="/" className="flex items-center">
                        <AddBoxOutlinedIcon />
                        <p>Home</p>
                    </Link>
                    <Link href="/" className="flex items-center">
                        <HomeOutlinedIcon />
                        <p>Home</p>
                    </Link>
                </div>
            </div>
        );
    }
    return <></>;
};

export default Navbar;
