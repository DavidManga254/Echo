import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export function HomePage() {
    return (
        <div>
            <div>
                <h2 className="text-lg">New and trending</h2>
                <p>Based on player counts and release date</p>
            </div>
            <button className="p-1 bg-gray-700 text-white sm:mt-2 rounded-md">
                Order by <KeyboardArrowDownIcon />
            </button>
        </div>
    );
}
