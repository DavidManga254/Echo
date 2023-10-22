import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Collapse from '@mui/material/Collapse';
import { TransitionGroup } from 'react-transition-group';
import { useState } from 'react';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import { PlatformInterface } from '../../../API/apiMethods/platformsApi/platformsApi';

export function PlatformCard(props: {
    platformName: string;
    platformImage: string;
    platformSlug: string;
    top_3_games: any[];
}) {
    const navigate = useNavigate();
    const [display, setDisplay] = useState(false);

    // function navigateToDetails() {
    //     navigate(`/home/games/${props.slug}`);
    // }

    return (
        <div
            className="w-full"
            style={{
                backgroundImage: `url(${props.platformImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
            }}
        >
            <div className="p-4 bg-black bg-opacity-60 ">
                <div className=" mb-20">
                    <h2
                        // onClick={navigateToDetails}
                        className="font-bold sm:text-2xl text-center"
                    >
                        {props.platformName}
                    </h2>
                </div>
                <div>
                    <div className="mb-2">Popular games</div>
                    <Divider sx={{ borderColor: 'gray' }} />
                    <div>
                        {props.top_3_games.map((game, index) => {
                            return (
                                <div className="flex flex-row justify-between mb-1">
                                    <div className="underline underline-offset-2 text-sm">
                                        {game.name}{' '}
                                    </div>
                                    <div className="text-sm">{game.released}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
