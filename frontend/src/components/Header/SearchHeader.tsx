import Link from 'next/link';
import { FunctionComponent } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

interface SearchHeaderProps {}

const SearchHeader: FunctionComponent<SearchHeaderProps> = () => {
    return (
        <div className="flex items-center justify-between bg-neutral-100 rounded-3xl border border-neutral-300 overflow-hidden px-3 py-2 w-[200px] phone:w-[150px] focus-within:w-[250px] transition-all duration-500 ease-in-out">
            <Link href={'/'}>
                <SearchRoundedIcon className="text-[#161617]" />
            </Link>
            <input
                type="text"
                placeholder="Search here..."
                className="bg-transparent outline-none border-none w-[80%] text-[#161617]"
            />
        </div>
    );
};

export default SearchHeader;
