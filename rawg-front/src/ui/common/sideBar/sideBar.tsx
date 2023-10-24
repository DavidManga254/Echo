import { useNavigate } from 'react-router-dom';
export function SideBar() {
    const navigate = useNavigate();
    return (
        <div className="w-full sm:h-screen sm:overflow-y-scroll lg:pl-2 pt-4 lg:h-auto lg:overflow-auto text-white">
            <div className="mt mb-3 font-semibold sm:text-xl font-sans lg:text-3xl lg:font-bold">
                Home
            </div>
            <div className="mb-3">
                <div className="mt mb-3 font-semibold sm:text-xl font-sans lg:text-3xl lg:font-bold">
                    New Releases
                </div>
                <div className="pl-2 lg:pl-3">
                    <div className="font-sans mb-2 lg:text-xl lg:font-semibold text-gray-300">
                        Last 30 days
                    </div>
                    <div className="font-sans mb-2 hover:cursor-pointer hover:text-blue-500">
                        This week
                    </div>
                    <div className="font-sans mb-2 hover:cursor-pointer hover:text-blue-500">
                        Next week
                    </div>
                    <div className="font-sans mb-2 hover:cursor-pointer hover:text-blue-500">
                        Release Calendar
                    </div>
                </div>
            </div>
            <div className="mb-3 lg:mb-5">
                <div
                    onClick={() => navigate('/home/platforms')}
                    className="mt mb-3 font-semibold sm:text-xl font-sans lg:text-3xl lg:font-bold"
                >
                    Platforms
                </div>
                <div className="pl-2">
                    <div className="font-sans mb-2 hover:cursor-pointer hover:text-blue-500">
                        PC
                    </div>
                    <div className="font-sans mb-2 hover:cursor-pointer hover:text-blue-500">
                        Play Station 4
                    </div>
                    <div className="font-sans mb-2 hover:cursor-pointer hover:text-blue-500">
                        Xbox one
                    </div>
                    <div className="font-sans mb-2 hover:cursor-pointer hover:text-blue-500">
                        More+
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="mt mb-3 font-semibold sm:text-xl font-sans lg:text-3xl lg:font-bold">
                    Genres
                </div>
                <div className="pl-2">
                    <div className="font-sans mb-2 hover:cursor-pointer hover:text-blue-500">
                        Action
                    </div>
                    <div className="font-sans mb-2 hover:cursor-pointer hover:text-blue-500">
                        Strategy
                    </div>
                    <div className="font-sans mb-2 hover:cursor-pointer hover:text-blue-500">
                        RPG
                    </div>
                </div>
            </div>
        </div>
    );
}
