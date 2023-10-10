import GoogleIcon from '@mui/icons-material/Google';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApiManager } from '../../../API/apiManager';
import { FeedbackModal } from '../feedbackModals/feedBackModal';
import { LoadingBackdrop } from '../loadingModal/loadingmodal';
import { AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';

export function SignUpForm() {
    const navigate = useNavigate();
    const signup = useApiManager().signUp;

    const [userDetails, setUserDetails] = useState({
        firstname: '',
        secondname: '',
        email: '',
        password: '',
    });
    const [showPasswordLengthValidation, setshowPasswordLengthValidation] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    function checkPasswordLength(password: string) {
        if (password.length < 8 && password.length > 0) {
            setshowPasswordLengthValidation(true);
        } else {
            setshowPasswordLengthValidation(false);
        }
    }

    async function submitCredentials(e: any): Promise<void> {
        e.preventDefault();

        setLoading(true);

        const response: AxiosResponse | AxiosError = await signup(
            userDetails.firstname,
            userDetails.secondname,
            userDetails.email,
            userDetails.password,
        );

        setLoading(false);

        if (axios.isAxiosError(response)) {
            if (response.response?.status === 409) {
                setErrorMessage('Email already taken');
                setErrorModal(true);

                setTimeout(() => {
                    setErrorModal(false);
                }, 6000);
            } else if (response.response?.status === 500) {
                setErrorMessage('Internal server error try again later');
                setErrorModal(true);

                setTimeout(() => {
                    setErrorModal(false);
                }, 6000);
            }
        } else {
            setSuccessMessage('Check your email to verify account');
            setSuccessModal(true);

            setTimeout(() => {
                setSuccessModal(false);
                navigate('/login');
            }, 6000);
        }
    }

    return (
        <div className=" w-full">
            <form className="mb-4" onSubmit={(e) => submitCredentials(e)}>
                <div className="mb-4">
                    <h1 className=" text-start text-4xl">Sign up</h1>
                </div>
                <div>
                    {isLoading ? (
                        <div>
                            <LoadingBackdrop />
                        </div>
                    ) : null}
                    {successModal ? (
                        <FeedbackModal message={successMessage} success={true} />
                    ) : null}
                    {errorModal ? <FeedbackModal message={errorMessage} success={false} /> : null}

                    <div className="mb-7">
                        <input
                            onChange={(e) =>
                                setUserDetails((previous) => {
                                    return {
                                        ...previous,
                                        firstname: e.target.value,
                                    };
                                })
                            }
                            type="text"
                            required
                            className="rounded bg-gray-300 p-1 w-full text-black"
                            placeholder="first name"
                        />
                    </div>
                    <div className="mb-7">
                        <input
                            onChange={(e) =>
                                setUserDetails((previous) => {
                                    return {
                                        ...previous,
                                        secondname: e.target.value,
                                    };
                                })
                            }
                            type="text"
                            required
                            className="rounded bg-gray-300  p-1 w-full text-black"
                            placeholder="second name"
                        />
                    </div>
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
                            type="email"
                            required
                            className="rounded bg-gray-300 p-1 w-full text-black"
                            placeholder="email"
                        />
                    </div>
                    <div className="mb-7">
                        <input
                            onChange={(e) => {
                                setUserDetails((previous) => {
                                    return {
                                        ...previous,
                                        password: e.target.value,
                                    };
                                });
                                checkPasswordLength(e.target.value);
                            }}
                            type="password"
                            required
                            className="rounded bg-gray-300 p-1 w-full text-black"
                            placeholder="password"
                        />
                        {showPasswordLengthValidation ? (
                            <p className="text-red-500 mt-2 text-sm">
                                Password should be longer than 8 characters
                            </p>
                        ) : null}
                    </div>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="bg-blue-500 rounded p-2 md:text-xl">
                        Sign up
                    </button>
                </div>
            </form>
            <div className="mb-4 flex justify-center">
                <p>
                    Already have an account?{' '}
                    <span
                        onClick={() => navigate('/login')}
                        className=" text-blue-500 hover:cursor-pointer"
                    >
                        log in
                    </span>
                </p>
            </div>
            <div className="mb-4 flex justify-center">
                <p>or</p>
            </div>
            <div className="mb-4 flex justify-center">
                <button className="bg-white text-black rounded-xl p-1">
                    <GoogleIcon /> Continue with google
                </button>
            </div>
        </div>
    );
}
