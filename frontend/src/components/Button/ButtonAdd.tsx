import { handleEditPersonInformation } from '@/redux/features/profileSlice';
import { useAppDispatch } from '@/redux/hooks';
import { FunctionComponent } from 'react';
import { MdOutlineAdd } from 'react-icons/md';

interface ButtonAddProps {
    label: string;
}

const ButtonAdd: FunctionComponent<ButtonAddProps> = ({ label }) => {
    const dispatch = useAppDispatch();
    return (
        <div
            onClick={() => dispatch(handleEditPersonInformation())}
            className="flex self-start hover:bg-neutral-100 hover-smooth text-sm px-1 rounded-3xl font-medium items-center cursor-pointer border border-neutral-300"
        >
            <MdOutlineAdd />
            <p>{label}</p>
        </div>
    );
};

export default ButtonAdd;
