import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../ui/pages/homePage/homepage';
import { AppEntry } from '../ui/pages/appEntry/appEntry';
import { GameDetails } from '../ui/pages/gameDetailsPage/gameDetailsPage';
import { LandingPage } from '../ui/pages/landing/landingPage';
import { SignUpPage } from '../ui/pages/signUpPage/signUpPage';
import { LoginPage } from '../ui/pages/loginPage/loginPage';
import { ConfirmEmailPage } from '../ui/pages/confirmEmailPage/confirmEmailPage';
import { createContext, useState } from 'react';

export const MyContext = createContext<any | null>(null);

function MyContextProvider(props: { children: any }) {
    const [url, setValue] = useState<string>('');

    const updateValue = (newValue: string) => {
        setValue(newValue);
    };

    return <MyContext.Provider value={{ url, updateValue }}>{props.children}</MyContext.Provider>;
}
const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
    },
    {
        path: '/signup',
        element: <SignUpPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/signup/confirmEmail/:token',
        element: <ConfirmEmailPage />,
    },
    {
        path: 'home/',
        element: (
            <MyContextProvider>
                <AppEntry />
            </MyContextProvider>
        ),
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: 'games/:gameSlug',
                element: <GameDetails />,
            },
        ],
    },
]);

export { router };
