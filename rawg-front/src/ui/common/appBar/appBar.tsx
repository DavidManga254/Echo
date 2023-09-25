import MenuIcon from '@mui/icons-material/Menu';
export function TopAppBar() {
    return (
        <div className="bg-yellow-500 flex flex-row justify-between">
            <div className="w-1/4">
                <div>RAWG</div>
            </div>
            <div className="w-2/4">
                <form>
                    <input type="text" />
                </form>
            </div>
            <div className="w-1/4">
                <div className="md:hidden sm:block">
                    <MenuIcon />
                </div>
                <div className="md:hidden sm:block">
                    <div className="w-1/2">
                        <p>Sign up</p>
                    </div>
                    <div className="w-1/2">
                        <p>Sign in</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
