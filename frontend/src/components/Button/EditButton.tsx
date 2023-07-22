import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { CiEdit } from 'react-icons/ci';

interface EditButtonProps {
    href: string;
    label: string;
}

const EditButton: FunctionComponent<EditButtonProps> = ({ href, label }) => {
    return (
        <Link
            href={href}
            className="flex items-center ml-auto text-base font-medium py-2 px-4 border-2 border-neutral-300 dark:hover:text-[#444] hover:bg-neutral-100 hover-smooth rounded-3xl"
        >
            <p className="mr-2">{label}</p>
            <CiEdit className="text-2xl" />
        </Link>
    );
};

export default EditButton;
