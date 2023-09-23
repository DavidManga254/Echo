import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../ui/pages/homePage/homepage';
import { routeNames } from './routeNames';

const router = createBrowserRouter([
    {
        path: routeNames.home,
        element: <HomePage />,
    },
]);

export { router };
