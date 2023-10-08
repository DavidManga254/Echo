import MenuIcon from '@mui/icons-material/Menu';
import { appConstants } from '../../../constants/constants';
import { Drawer } from '@mui/material';
import { useState } from 'react';
import { SideBar } from '../sideBar/sideBar';

export function TopAppBar() {
    const [isDrawerOpen, setDrawerState] = useState(false);

    return (
        <div className="flex justify-between p-3 text-white">
            <div className="md:w-[10%] flex items-center flex-row font-sans font-bold md:text-3xl sm:text-lg text-white">
                RAWG
            </div>
            <div className="w-[70%] flex justify-center">
                <form className="w-full flex justify-center">
                    <input
                        placeholder={
                            appConstants.search_games_placeHolder
                        }
                        className="w-full bg-gray-200 rounded-3xl p-2 sm:p-1 focus:bg-white border-0"
                        type="text"
                    />
                </form>
            </div>
            <div className="md:w-[10%] ">
                <div className="sm:inline md:hidden text-white text-lg">
                    <MenuIcon
                        onClick={() =>
                            setDrawerState((previous) => !previous)
                        }
                    />
                    <Drawer
                        open={isDrawerOpen}
                        anchor="right"
                        onClick={() =>
                            setDrawerState((previous) => !previous)
                        }
                    >
                        <div className="w-[60vw] bg-[rgb(32,31,31)]">
                            <SideBar />
                        </div>
                    </Drawer>
                </div>
                <div className="sm:hidden text-white text-sm  md:inline-flex flex w-full justify-between h-full items-center font-sans font-semibold">
                    {/* <div>
                        <p>{appConstants.sign_in}</p>
                    </div>
                    <div>
                        <p>{appConstants.sign_up}</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
