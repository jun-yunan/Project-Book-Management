'use client';

import Link from 'next/link';
import { FunctionComponent } from 'react';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';

interface SocialLinkProps {
    label: string;
    link: string;
}

const SocialLink: FunctionComponent<SocialLinkProps> = ({ label, link }) => {
    return (
        <div className="min-w-[350px] flex flex-col mb-6">
            <span className="text-neutral-500">{label}</span>
            <div className="flex items-center hover:underline hover:text-[#0a66c2] hover-smooth">
                <LinkRoundedIcon />
                <Link href={link} target="_blank" className="ml-2 font-semibold ">
                    {link}
                </Link>
            </div>
        </div>
    );
};

export default SocialLink;
