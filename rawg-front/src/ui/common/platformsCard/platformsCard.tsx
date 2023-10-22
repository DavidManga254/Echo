import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

export function PlatformCard(props: {
    platformName: string;
    platformImage: string;
    platformSlug: string;
    top_3_games: any[];
}) {
    const navigate = useNavigate();

    return (
        <div
            className="w-full"
            style={{
                backgroundImage: `url(${props.platformImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
            }}
            onClick={() => navigate(`/home/platforms/${props.platformSlug}`)}
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
                                <div key={index} className="flex flex-row justify-between mb-1">
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
