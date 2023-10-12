import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useApiManager } from '../../../API/apiManager';
import { FeedbackModal } from '../feedbackModals/feedBackModal';
import { LoadingBackdrop } from '../loadingModal/loadingmodal';
import axios from 'axios';
import { AxiosError, AxiosResponse } from 'axios';
import { loginInterface } from '../../../API/apiMethods/userApi/userApi';
import { ResponseInterface } from '../../../API/responseInterface';
import { GoogleSignInButton } from '../googleSignIn/googleSignIn';
export function LoginForm() {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: '',
    });

    const [isLoading, setLoading] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const login = useApiManager().login;

    async function submitCredentials(e: any): Promise<void> {
        e.preventDefault();

        setLoading(true);

        const response: AxiosResponse<ResponseInterface<loginInterface>> | AxiosError = await login(
            userDetails.email,
            userDetails.password,
        );

        if (axios.isAxiosError(response)) {
            if (response.response?.status === 401) {
                setErrorMessage('Invalid login credentials');
                setErrorModal(true);
                setLoading(false);

                setTimeout(() => {
                    setErrorModal(false);
                }, 6000);
            }
        } else {
            navigate('/home');
        }
    }
    return (
        <div className=" w-full">
            {isLoading ? (
                <div>
                    <LoadingBackdrop />
                </div>
            ) : null}
            {errorModal ? <FeedbackModal message={errorMessage} success={false} /> : null}
            <form className="mb-4" onSubmit={(e) => submitCredentials(e)}>
                <div className="mb-4">
                    <h1 className=" text-start text-4xl">Log in</h1>
                </div>
                <div>
                    <div className="mb-7">
                        <input
                            onChange={(e) =>
                                setUserDetails((previous) => {
                                    return {
                                        ...previous,
                                        email: e.target.value,
                                    };
                                })
                            }
                            required
                            type="email"
                            id="email"
                            name="email"
                            className="rounded bg-gray-300 p-1 w-full text-black"
                            placeholder="email"
                        />
                    </div>
                    <div className="mb-7">
                        <input
                            onChange={(e) =>
                                setUserDetails((previous) => {
                                    return {
                                        ...previous,
                                        password: e.target.value,
                                    };
                                })
                            }
                            required
                            id="password"
                            type="password"
                            name="password"
                            className="rounded bg-gray-300 p-1 w-full text-black"
                            placeholder="password"
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <input
                        type="submit"
                        className="bg-blue-500 rounded p-2 md:text-xl"
                        value={'log in'}
                    />
                </div>
            </form>
            <div className="mb-4 flex justify-center">
                <p>
                    Do not have an account?{' '}
                    <span
                        onClick={() => navigate('/signup')}
                        className=" text-blue-500 hover:cursor-pointer"
                    >
                        sign up
                    </span>
                </p>
            </div>
            <div className="mb-4 flex justify-center">
                <p>or</p>
            </div>
            <div className="mb-4 flex justify-center">
                <GoogleSignInButton />
            </div>
        </div>
    );
}
