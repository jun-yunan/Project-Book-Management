import Link from 'next/link';
import { FunctionComponent } from 'react';

interface ItemMenuProps {
    label: string;
    href: string;
}

const ItemMenu: FunctionComponent<ItemMenuProps> = ({ href, label }) => {
    return (
        <Link
            href={href}
            className="font-medium rounded-3xl hover-smooth py-4 px-5 dark:text-[#ededed] dark:hover:bg-white dark:hover:text-[#0a66c2] text-[#444] hover:text-[#0a66c2] hover:font-bold hover:border hover:border-[#0a66c2] hover:bg-sky-100 mb-4 "
        >
            <p>{label}</p>
        </Link>
    );
};

export default ItemMenu;
