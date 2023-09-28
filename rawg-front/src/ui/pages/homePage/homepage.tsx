import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
// import Menu from '@mui/icons-material/Menu';
// import { MenuItem } from '@mui/material';
import { GameCard } from '../../common/gameCard/gameCard';
export function HomePage() {
    const [orderCriteria, setOrderCriteria] = useState('name');
    return (
        <div>
            <div className="mb-4">
                <div>
                    <h2 className="sm:text-xl mb-1 font-bold">
                        New and trending
                    </h2>
                    <p className="sm:text-xs mb-3">
                        Based on player counts and release date
                    </p>
                </div>
                <div>
                    <button className="p-1 text-sm bg-gray-700 text-white sm:mt-2 rounded-md">
                        Order by{' '}
                        <span className="font-bold">
                            {orderCriteria}
                        </span>
                        <KeyboardArrowDownIcon />
                    </button>
                </div>
            </div>
            <div>
                <div>
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                </div>
            </div>
        </div>
    );
}
