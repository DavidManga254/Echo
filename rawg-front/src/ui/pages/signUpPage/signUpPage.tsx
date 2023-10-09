import { SignUpForm } from '../../common/authForms/signUpForm';

export function SignUpPage() {
    return (
        <div className="bg-landing-image md:bg-cover md:bg-no-repeat w-screen h-screen">
            <div className="w-full h-full bg-black bg-opacity-75 flex items-center text-white justify-center">
                <div className="sm:w-3/4 md:w-1/4 p-2">
                    <div>
                        <h1>RAWG</h1>
                    </div>
                    <div className="w-full">
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
