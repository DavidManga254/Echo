import { useNavigate } from 'react-router-dom';

export function LandingPage() {
    const navigate = useNavigate();

    return (
        <div
            className="md:bg-cover md:bg-no-repeat w-screen h-screen"
            style={{ backgroundImage: 'url(background.jpg)' }}
        >
            <div className="w-full h-full bg-black bg-opacity-75 flex items-center text-white justify-center">
                <div>
                    <div className="mb-5">
                        <h1>RAWG</h1>
                    </div>
                    <div>
                        <button
                            onClick={() => navigate('/login')}
                            className="bg-blue-500 rounded p-2"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
