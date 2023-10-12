import { signUp, confirmEmail, login } from './apiMethods/userApi/userApi';
import { getLoginStatus } from './apiMethods/userApi/checkAuth';
const useApiManager = () => {
    return {
        signUp,
        confirmEmail,
        login,
        getLoginStatus,
    };
};

export { useApiManager };
