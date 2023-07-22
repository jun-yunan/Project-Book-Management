'use client';
import { FunctionComponent, useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';

interface ProviderThemeProps {
    children: React.ReactNode;
}

const ProviderTheme: FunctionComponent<ProviderThemeProps> = ({ children }) => {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <>{children}</>;
    }
    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default ProviderTheme;
