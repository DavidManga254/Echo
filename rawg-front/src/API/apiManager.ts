import { signUp, confirmEmail, login } from './apiMethods/userApi/userApi';

const useApiManager = () => {
    return {
        signUp,
        confirmEmail,
        login,
    };
};

export { useApiManager };
