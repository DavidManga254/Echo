import { SignUpForm } from '../../common/authForms/signUpForm';

export function SignUpPage() {
    return (
        <div
            className="bg-cover bg-no-repeat w-screen min-h-screen"
            style={{ backgroundImage: 'url(background.jpg)' }}
        >
            <div className="w-full min-h-screen bg-black bg-opacity-75 flex items-center text-white justify-center">
                <div className="sm:w-3/4 md:w-1/2 lg:w-1/4 p-2">
                    <div className=" mb-10">
                        <h1 className="text-center text-5xl font-bold font-sans">RAWG</h1>
                    </div>
                    <div className="w-full">
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
