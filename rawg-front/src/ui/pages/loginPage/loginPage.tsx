import { LoginForm } from '../../common/authForms/loginForm';
import { useApiManager } from '../../../API/apiManager';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';

export function LoginPage() {
    const getLoginStatus = useApiManager().getLoginStatus;
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const response: AxiosResponse = await getLoginStatus();
            if (response.status === 200) {
                navigate('/home');
            }
        })();
    }, []);
    return (
        <div
            className="md:bg-cover md:bg-no-repeat w-screen min-h-screen"
            style={{ backgroundImage: 'url(background.jpg)' }}
        >
            <div className="w-full min-h-screen bg-black bg-opacity-75 flex items-center text-white justify-center">
                <div className="sm:w-3/4 md:w-1/4 p-2">
                    <div className=" mb-20">
                        <h1 className="text-center text-5xl font-bold font-sans">RAWG</h1>
                    </div>
                    <div className="w-full">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
