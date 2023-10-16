import { TopAppBar } from '../../common/appBar/appBar';
import { Outlet } from 'react-router-dom';
import { SideBar } from '../../common/sideBar/sideBar';
import { useContext } from 'react';
import { MyContext } from '../../../router/router';

export function AppEntry() {
    const context = useContext(MyContext);
    return (
        <div
            className="w-screen min-h-screen"
            style={{
                backgroundImage: `linear-gradient(to bottom, transparent 10%, rgba(0, 0, 0 )),${
                    context.url === '' ? null : `url(${context.url})`
                }`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 40%',
                backgroundColor: 'black',
                transition: 'background-size 0.5s ease', // Add a smooth transition
            }}
        >
            <div
                className={`font-sans min-h-screen  text-white p-5 ${
                    context.url === '' ? 'bg-[rgb(21,21,21)]' : 'bg-[rgb(21,21,21)] bg-opacity-50'
                }`}
            >
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
        </div>
    );
}
