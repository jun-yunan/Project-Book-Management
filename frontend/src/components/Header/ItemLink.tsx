import Link from 'next/link';
import { FunctionComponent } from 'react';

interface ItemLinkProps {
    path: string;
    children: React.ReactNode;
}

const ItemLink: FunctionComponent<ItemLinkProps> = ({ children, path }) => {
    return (
        <Link className="font-semibold text-xl flex items-center" href={path}>
            {children}
        </Link>
    );
};

export default ItemLink;
