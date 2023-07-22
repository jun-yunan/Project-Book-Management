import { ReduxProvider } from '@/redux/Provider';
import './globals.css';
import { Inter } from 'next/font/google';
import { ToastContainer } from '../utils/toastProvider';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import ProviderTheme from '@/utils/ThemeProvider';
import Navbar from '@/components/Navbar/Navbar';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ProviderTheme>
                    <ReduxProvider>
                        <Header />
                        <div className="bg-white text-[#161617] mt-[75px] flex">
                            <Navbar />
                            {children}
                        </div>
                        <Footer />
                    </ReduxProvider>
                    <ToastContainer />
                </ProviderTheme>
            </body>
        </html>
    );
}
