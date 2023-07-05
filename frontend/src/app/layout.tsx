import { ReduxProvider } from '@/redux/Provider';
import './globals.css';
import { Inter } from 'next/font/google';
import { ToastContainer } from '../utils/toastProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ReduxProvider>{children}</ReduxProvider>
                <ToastContainer />
            </body>
        </html>
    );
}