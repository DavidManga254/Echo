import { TopAppBar } from '../../common/appBar/appBar';
import { Outlet } from 'react-router-dom';

export function AppEntry() {
    return (
        <div className="font-sans bg-[rgb(21,21,21)] text-white">
            <div>
                <TopAppBar />
            </div>
            <div>
                <div>{/* sidebar */}</div>
                <div className="sm:p-2">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
