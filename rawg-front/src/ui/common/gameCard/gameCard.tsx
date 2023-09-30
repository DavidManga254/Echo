import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Collapse from '@mui/material/Collapse';
import { TransitionGroup } from 'react-transition-group';
import { useState } from 'react';
import Divider from '@mui/material/Divider';

export function GameCard(props: {
    // gamename: string;
    // gameImage: string;
    // platforms: string[];
    // releaseDate: string;
    // genre: string;
}) {
    const [display, setDisplay] = useState(false);

    return (
        <div className="rounded-xl bg-[#282727] mb-4 overflow-hidden lg:max-w-[22.5%] lg:mr-4">
            <div className="w-full">
                <img
                    className="w-full"
                    src="https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg"
                />
            </div>
            <div className="p-2">
                <div className="mb-2">
                    <h2 className="fon font-bold sm:text-2xl md:text-base">
                        Vampire: The Masquerade - Bloodlines 2
                    </h2>
                </div>
                <div className="mb-2">
                    <button className="bg-[#414040] sm:text-sm p-1 rounded mr-2">
                        <span className="text-xs font-bold">
                            <AddIcon />
                        </span>
                        788
                    </button>
                    <button className="bg-[#414040] sm:text-sm p-1 rounded mr-2">
                        <MoreHorizIcon />
                    </button>
                </div>
                <div>
                    <TransitionGroup>
                        {display ? (
                            <Collapse>
                                <div>
                                    <div className="flex justify-between mt-3">
                                        <p className="text-sm text-gray-500">
                                            Release date
                                        </p>
                                        <p className="te text-xs">
                                            Dec 31, 2023
                                        </p>
                                    </div>
                                    <Divider />
                                    <div className="flex justify-between mt-3">
                                        <p className="text-sm text-gray-500">
                                            Release date
                                        </p>
                                        <p className="te text-xs">
                                            Dec 31, 2023
                                        </p>
                                    </div>
                                    <Divider />
                                    <div className="flex justify-between mt-3">
                                        <p className="text-sm text-gray-500">
                                            Release date
                                        </p>
                                        <p className="te text-xs">
                                            Dec 31, 2023
                                        </p>
                                    </div>
                                    <Divider />
                                </div>
                            </Collapse>
                        ) : null}
                    </TransitionGroup>
                </div>
                <div className="flex justify-center text-sm mb-3 lg:hidden">
                    {display ? (
                        <p
                            onClick={() => setDisplay(!display)}
                            className="x underline underline-offset-8"
                        >
                            View less
                        </p>
                    ) : (
                        <p
                            onClick={() => setDisplay(!display)}
                            className="x underline underline-offset-8"
                        >
                            View more
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
