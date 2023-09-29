import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
                    <h2 className="sm:text-xl mb-1 font-bold lg:text-7xl">
                        New and trending
                    </h2>
                    <p className="sm:text-xs mb-4 lg:text-xl">
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
                <div className="md:flex md:flex-row md:flex-wrap">
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
