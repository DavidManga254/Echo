import { signUp, confirmEmail, login } from './apiMethods/userApi/userApi';
import { getLoginStatus } from './apiMethods/userApi/checkAuth';
import { getGames } from './apiMethods/gamesApi/gamesApi';
import { getMoreGames } from './apiMethods/gamesApi/gamesApi';
import { getGameDetails } from './apiMethods/gamesApi/gamesApi';
import { searchGames } from './apiMethods/gamesApi/gamesApi';

const useApiManager = () => {
    return {
        signUp,
        confirmEmail,
        login,
        getLoginStatus,
        getGames,
        getMoreGames,
        getGameDetails,
        searchGames,
    };
};

export { useApiManager };
