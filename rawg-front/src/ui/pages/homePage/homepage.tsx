import React, { useEffect, useRef, useState } from 'react';
import { GameCard } from '../../common/gameCard/gameCard';
import { useNavigate } from 'react-router-dom';
import { getAllGames, getNextPage } from './homePageModel';
import { SingleGameInterface } from '../../../API/apiMethods/gamesApi/gamesApi';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export function HomePage() {
    const navigate = useNavigate();
    const [orderCriteria, setOrderCriteria] = useState('name');
    const observerRef = useRef<HTMLDivElement | null>(null);

    const [gameList, setGameList] = useState<SingleGameInterface[]>([]);
    const [nextPage, setNextPage] = useState<string>('');

    var page = 1;
    async function getMoreGames() {
        console.log(nextPage);

        const response = await getNextPage(nextPage);
        const newList = [...gameList, ...response.games];

        console.log(response.next);

        setGameList(newList);
        setNextPage(response.next);
    }
    useEffect(() => {
        (async () => {
            const response = await getAllGames(page);
            console.log(response.next);
            console.log(nextPage);
            setGameList(response.games);
            setNextPage(response.next);
        })();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (
                window.innerHeight + document.documentElement.scrollTop + 1 >=
                document.documentElement.scrollHeight
            ) {
                getMoreGames();
            }
        });
        return () =>
            window.removeEventListener('scroll', () => {
                // if (
                //     window.innerHeight + document.documentElement.scrollTop + 1 >=
                //     document.documentElement.scrollHeight
                // ) {
                //     getMoreGames();
                // }
            });
    }, []);

    return (
        <div>
            {gameList.length === 0 ? null : (
                <div>
                    <div className="min-h-[110vh]">
                        <div className="mb-4 ">
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
                                    Order by <span className="font-bold">{orderCriteria}</span>
                                    <KeyboardArrowDownIcon />
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="md:flex md:flex-row md:flex-wrap">
                                {Array.isArray(gameList)
                                    ? gameList.map((game) => {
                                          return (
                                              <GameCard
                                                  key={game.slug}
                                                  gamename={game.name}
                                                  gameImage={game.background_image}
                                                  releaseDate={game.released}
                                              />
                                          );
                                      })
                                    : null}
                            </div>
                        </div>
                    </div>

                    <div ref={observerRef} id="bottom" className="h-[2vh] bg-red-500"></div>
                </div>
            )}
        </div>
    );
}
