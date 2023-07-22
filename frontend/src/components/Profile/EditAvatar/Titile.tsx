'use client';

import { FunctionComponent } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Link from 'next/link';

interface TitleProps {
    label: string;
    href: string;
}

const Title: FunctionComponent<TitleProps> = ({ href, label }) => {
    return (
        <div className="w-full font-semibold text-xl flex items-center justify-between border-b border-b-neutral-300">
            <p>{label}</p>
            <Link href={href} className="hover:bg-neutral-200 hover-smooth p-2 rounded-[50%]">
                <CloseRoundedIcon sx={{ fontSize: 30 }} />
            </Link>
        </div>
    );
};

export default Title;
