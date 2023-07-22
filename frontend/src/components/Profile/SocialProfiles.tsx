import { FunctionComponent } from 'react';
import SocialLink from './SocialLink';
import EditButton from '../Button/EditButton';

interface SocialProfilesProps {}

const SocialProfiles: FunctionComponent<SocialProfilesProps> = () => {
    return (
        <div className="flex dark:text-white my-8 items-center flex-col w-full min-h-[150px] border border-neutral-300 rounded-xl shadow-lg p-4">
            <div className="flex w-full justify-between items-center mb-6">
                <p className="text-lg font-semibold">Social Profiles</p>
                <EditButton href="" label="Edit" />
            </div>
            <div className="flex self-start flex-col">
                <SocialLink label="Facebook" link="https://www.facebook.com/profile.php?id=100035052263110" />
                <SocialLink label="Tiktok" link="https://www.tiktok.com/@jun_yunan" />
                <SocialLink label="Linkedin" link="https://www.linkedin.com/in/nguyen-anh-kiet-193864217" />
            </div>
        </div>
    );
};

export default SocialProfiles;
