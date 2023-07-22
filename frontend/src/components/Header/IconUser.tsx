/* eslint-disable @next/next/no-img-element */
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';

interface IconUserProps {}

const IconUser: FunctionComponent<IconUserProps> = () => {
    return (
        <div className="flex items-center cursor-pointer">
            <div className="w-[50px] h-[50px] mr-2 flex items-center justify-center border-2 dark:border-white bg-neutral-200 border-neutral-400 rounded-[50%] overflow-hidden">
                {false ? <img src="" alt="" /> : <div></div>}
            </div>
            {/* <p className="mr-1 text-base font-medium">My Account</p> */}
            <FontAwesomeIcon
                icon={faChevronDown}
                className="text-2xl dark:text-white text-gray-500 font-light"
            />
        </div>
    );
};

export default IconUser;
