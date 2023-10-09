import GoogleIcon from '@mui/icons-material/Google';
export function LoginForm() {
    return (
        <div className=" w-full">
            <div className="mb-4">
                <div className="mb-4">
                    <h1 className=" text-start text-4xl">Log in</h1>
                </div>
                <div>
                    <div className="mb-7">
                        <input
                            className="rounded bg-gray-300 p-1 w-full"
                            placeholder="email"
                        />
                    </div>
                    <div className="mb-7">
                        <input
                            className="rounded bg-gray-300 p-1 w-full"
                            placeholder="password"
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-blue-500 rounded p-2 md:text-xl">Log in</button>
                </div>
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
