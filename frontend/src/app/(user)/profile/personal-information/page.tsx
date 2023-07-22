import FormEditPersonInformation from '@/components/Form/FormEditPersonInformation';
import Title from '@/components/Profile/EditAvatar/Titile';
import { FunctionComponent } from 'react';

interface PersonalInformationPageProps {}

const PersonalInformationPage: FunctionComponent<PersonalInformationPageProps> = () => {
    return (
        <div className="fixed w-full h-full text-[#444] dark:text-white flex items-center justify-center bg-gray-500 top-0 left-0 bg-opacity-50">
            <div className="w-[50%] min-h-[500px] bg-white dark:bg-[#1a1a1a] p-6 rounded-lg flex flex-col">
                <Title href="/profile" label="Edit Personal Information" />
                <FormEditPersonInformation />
            </div>
        </div>
    );
};

export default PersonalInformationPage;
