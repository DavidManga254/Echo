import { LoginForm } from '../../common/authForms/loginForm';
export function LoginPage() {
    return (
        <div className="bg-landing-image md:bg-cover md:bg-no-repeat w-screen min-h-screen">
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
