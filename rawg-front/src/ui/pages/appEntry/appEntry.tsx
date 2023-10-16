import { TopAppBar } from '../../common/appBar/appBar';
import { Outlet } from 'react-router-dom';
import { SideBar } from '../../common/sideBar/sideBar';
import { useContext } from 'react';
import { MyContext } from '../../../router/router';

export function AppEntry() {
    const context = useContext(MyContext);
    return (
        <div className="w-screen bg-black " style={{ position: 'relative' }}>
            <div
                className="sm:min-h-[40vh] md:min-h-[80vh] min-w-[100vw]"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    backgroundImage: `linear-gradient(to bottom, transparent 10%, rgba(0, 0, 0 ) 100%),${
                        context.url === '' ? null : `url(${context.url})`
                    }`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    backgroundColor: 'black',
                    transition: 'background-size 0.5s ease', // Add a smooth transition
                }}
            ></div>
            <div
                style={{ zIndex: '3000' }}
                className={`font-sans min-h-screen z-50 relative text-white p-5 ${
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
                    <div className="lg:w-[85%] lg:p-3">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}
