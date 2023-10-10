import { LoadingBackdrop } from '../../common/loadingModal/loadingmodal';
import { FeedbackModal } from '../../common/feedbackModals/feedBackModal';
import { useApiManager } from '../../../API/apiManager';
import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function ConfirmEmailPage() {
    const confirmEmail = useApiManager().confirmEmail;

    const navigate = useNavigate();

    const location = useLocation();

    const [successModal, setSuccessModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const { token } = useParams();

    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');

    async function confirmAccount() {
        if (token && email) {
            const response: AxiosResponse | AxiosError = await confirmEmail(email, token);

            if (axios.isAxiosError(response)) {
                if (response.response?.status === 401) {
                    setErrorMessage('Invalid Credentials');
                    setErrorModal(true);

                    setTimeout(() => {
                        setErrorModal(false);
                    }, 6000);
                }
            } else {
                setSuccessMessage('Account verified going to login page');
                setSuccessModal(true);

                setTimeout(() => {
                    setSuccessModal(false);
                    navigate('/login');
                }, 4000);
            }
        } else {
            setErrorMessage('Invalid Credentials');
            setErrorModal(true);

            setTimeout(() => {
                setErrorModal(false);
                navigate('/signup');
            }, 3000);
        }
    }

    useEffect(() => {
        confirmAccount();
    }, []);

    return (
        <div className="bg-landing-image bg-cover bg-no-repeat w-screen min-h-screen">
            <div className="w-full min-h-screen bg-black bg-opacity-75 flex items-center text-white justify-center">
                <div className="sm:w-3/4 md:w-1/2 lg:w-1/4 p-2">
                    <div className="w-full" onLoad={confirmAccount}>
                        {successModal ? (
                            <FeedbackModal message={successMessage} success={true} />
                        ) : null}
                        {errorModal ? (
                            <FeedbackModal message={errorMessage} success={false} />
                        ) : null}
                        <LoadingBackdrop />
                    </div>
                </div>
            </div>
        </div>
    );
}
