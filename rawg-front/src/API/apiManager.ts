import { signUp, confirmEmail, login } from './apiMethods/userApi/userApi';
import { getLoginStatus } from './apiMethods/userApi/checkAuth';
import { getGames } from './apiMethods/gamesApi/gamesApi';
import { getMoreGames } from './apiMethods/gamesApi/gamesApi';
import { getGameDetails } from './apiMethods/gamesApi/gamesApi';
import { searchGames } from './apiMethods/gamesApi/gamesApi';
import { getAllPlatforms } from './apiMethods/platformsApi/platformsApi';
import { getGamesByPlatform } from './apiMethods/platformsApi/platformsApi';
import { getMoreGamesbyPlatform } from './apiMethods/platformsApi/platformsApi';
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
        getAllPlatforms,
        getGamesByPlatform,
        getMoreGamesbyPlatform,
    };
};

export { useApiManager };
