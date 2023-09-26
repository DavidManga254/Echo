import MenuIcon from '@mui/icons-material/Menu';
import { appConstants } from '../../../constants/constants';
export function TopAppBar() {
    return (
        <div className="bg-blue-500 flex justify-between p-3">
            <div className="md:w-[10%] flex items-center flex-row font-sans font-bold md:text-3xl sm:text-lg text-white">
                RAWG
            </div>
            <div className="w-[70%] flex justify-center">
                <form className="w-full flex justify-center">
                    <input
                        placeholder={
                            appConstants.searchGamesPlaceHolder
                        }
                        className="w-full bg-gray-200 rounded-3xl p-2 sm:p-1 focus:bg-white border-0"
                        type="text"
                    />
                </form>
            </div>
            <div className="md:w-[10%] ">
                <div className="sm:inline md:hidden text-white text-lg">
                    <MenuIcon />
                </div>
                <div className="sm:hidden text-white  md:inline-flex flex w-full justify-between h-full items-center font-sans font-semibold">
                    <div>
                        <p>SIGN IN</p>
                    </div>
                    <div>
                        <p>SIGN UP</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
