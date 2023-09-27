import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import Menu from '@mui/icons-material/Menu';
import { MenuItem } from '@mui/material';
export function HomePage() {
    const [orderCriteria, setOrderCriteria] = useState('name');
    return (
        <div>
            <div>
                <h2 className="sm:text-xl mb-1 font-bold">
                    New and trending
                </h2>
                <p className="sm:text-xs mb-3">
                    Based on player counts and release date
                </p>
            </div>
            <button className="p-1 text-sm bg-gray-700 text-white sm:mt-2 rounded-md">
                Order by{' '}
                <span className="font-bold">{orderCriteria}</span>{' '}
                <KeyboardArrowDownIcon />
            </button>
        </div>
    );
}
