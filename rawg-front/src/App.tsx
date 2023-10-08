import './App.css';
import { RouterProvider } from 'react-router-dom';
import { apiInstance } from './API/apiConfiguration';
import { createContext } from 'react';

import { router } from './router/router';
function App() {
    const ApiContext = createContext(apiInstance);

    return (
        <ApiContext.Provider value={apiInstance}>
            <RouterProvider router={router} />
        </ApiContext.Provider>
    );
}

export default App;
