import SocialProfiles from '@/components/Profile/SocialProfiles';
import PersonalInformation from '@/components/Profile/PersonalInformation';
import User from '@/components/Profile/User';
import { FunctionComponent } from 'react';

interface ProfilePageProps {}

const ProfilePage: FunctionComponent<ProfilePageProps> = () => {
    return (
        <div className="w-[80%] dark:text-white flex flex-col items-center py-2 px-10  text-[#444]">
            <p className="text-xl font-medium mb-6 self-start">My Profile</p>
            <User />
            <PersonalInformation />
            <SocialProfiles />
        </div>
    );
};

export default ProfilePage;
