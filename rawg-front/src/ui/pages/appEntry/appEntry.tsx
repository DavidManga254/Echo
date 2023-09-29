import { TopAppBar } from '../../common/appBar/appBar';
import { Outlet } from 'react-router-dom';
import { SideBar } from '../../common/sideBar/sideBar';

export function AppEntry() {
    return (
        <div className="font-sans bg-[rgb(21,21,21)] text-white p-5">
            <div className=" mb-5">
                <TopAppBar />
            </div>
            <div className="lg:flex lg:flex-row w-full">
                <div className=" w-[15%] sm:hidden lg:inline-block">
                    <SideBar />
                </div>
                {/* <div className="bg-blue-600 p-3">
                    <Outlet />
                </div> */}
                <div className="lg:w-[85%] lg:p-3">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
