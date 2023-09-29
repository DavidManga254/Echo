import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../ui/pages/homePage/homepage';
import { AppEntry } from '../ui/pages/appEntry/appEntry';
import { GameDetails } from '../ui/pages/gameDetailsPage/gameDetailsPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppEntry />,
        children: [
            {
                path: '/',
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
