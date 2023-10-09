import { signUp, confirmEmail, login } from './apiMethods/userApi/userApi';

const useRawgApiManager = () => {
    return {
        signUp,
        confirmEmail,
        login,
    };
};

export { useRawgApiManager };
