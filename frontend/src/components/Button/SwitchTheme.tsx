import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent, useEffect, useState } from 'react';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { useTheme } from 'next-themes';

interface SwitchThemeProps {}

const SwitchTheme: FunctionComponent<SwitchThemeProps> = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex items-center bg-white transition-all duration-500 ease-in-out dark:bg-neutral-700  justify-between border-2 border-neutral-300 rounded-3xl">
            <button
                className={`p-2 rounded-[50%] ${theme === 'light' ? 'bg-sky-500' : ''} `}
                onClick={() => {
                    setTheme('light');
                }}
            >
                <WbSunnyRoundedIcon sx={{ fontSize: 25 }} />
            </button>

            <button
                className={`p-2 rounded-[50%] ${theme === 'dark' ? 'bg-sky-500' : ''}`}
                onClick={() => setTheme('dark')}
            >
                <DarkModeRoundedIcon sx={{ fontSize: 25 }} />
            </button>
        </div>
    );
};

export default SwitchTheme;
