import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../ui/pages/homePage/homepage';
import { AppEntry } from '../ui/pages/appEntry/appEntry';
import { GameDetails } from '../ui/pages/gameDetailsPage/gameDetailsPage';
import { LandingPage } from '../ui/pages/landing/landingPage';
import { SignUpPage } from '../ui/pages/signUpPage/signUpPage';
import { LoginPage } from '../ui/pages/loginPage/loginPage';
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
        path: 'home/',
        element: <AppEntry />,
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
