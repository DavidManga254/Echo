import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../ui/pages/homePage/homepage';
import { routeNames } from './routeNames';
import { AppEntry } from '../ui/pages/appEntry/appEntry';

const router = createBrowserRouter([
    {
        path: routeNames.home,
        element: <AppEntry />,
        children: [
            {
                path: routeNames.homePage,
                element: <HomePage />,
            },
        ],
    },
]);

export { router };
