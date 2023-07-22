import { FunctionComponent } from 'react';
import { BarLoader } from 'react-spinners';

interface LoadingHomePageProps {}

const LoadingHomePage: FunctionComponent<LoadingHomePageProps> = () => {
    return (
        <div className="w-full h-[500px] flex justify-center items-center">
            <BarLoader color="#0a66c2" />
        </div>
    );
};

export default LoadingHomePage;
