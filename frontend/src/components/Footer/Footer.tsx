import { FunctionComponent } from 'react';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
    return (
        <div className="w-full min-h-[300px] bg-[#0F4C81]">
            <h2>Footer</h2>
        </div>
    );
};

export default Footer;
