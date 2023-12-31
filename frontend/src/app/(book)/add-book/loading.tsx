import SkeletonFormAddBook from '@/components/Skeleton/SkeletonFormAddBook';
import { FunctionComponent } from 'react';

interface LoadingAddBookProps {}

const LoadingAddBook: FunctionComponent<LoadingAddBookProps> = () => {
    // return <SkeletonFormAddBook />;
    return <div>Loading...</div>;
};

export default LoadingAddBook;
