import { FunctionComponent } from 'react';

import Title from '@/components/Profile/EditAvatar/Titile';
import ChangeAvatar from '@/components/Form/ChangeAvatar';

interface EditAvatarPageProps {}

const EditAvatarPage: FunctionComponent<EditAvatarPageProps> = () => {
    return (
        <div className="fixed w-full h-full text-[#444] dark:text-white flex items-center justify-center bg-gray-500 top-0 left-0 bg-opacity-50">
            <div className="w-[50%] min-h-[500px] bg-white dark:bg-[#1a1a1a] p-6 rounded-lg flex flex-col">
                <Title href="/profile" label="Change Avatar" />
                <ChangeAvatar />
            </div>
        </div>
    );
};

export default EditAvatarPage;
