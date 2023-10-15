import { useEffect, useRef, useState, useCallback } from 'react';
import { GameCard } from '../../common/gameCard/gameCard';
import { getAllGames, getNextPage } from './homePageModel';
import { SingleGameInterface } from '../../../API/apiMethods/gamesApi/gamesApi';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CircularProgress from '@mui/material/CircularProgress';

export function HomePage() {
    const [orderCriteria, setOrderCriteria] = useState('name');
    const observerRef = useRef<HTMLDivElement | null>(null);
    const [isFetching, setIsFetching] = useState(false);

    const [gameList, setGameList] = useState<SingleGameInterface[]>([]);
    const [nextPage, setNextPage] = useState<string>('');

    const observer = useRef<any>();

    const nextPageRef = useRef(nextPage);
    const gameListRef = useRef(gameList);

    async function getMoreGames() {
        const response = await getNextPage(nextPageRef.current);
        const newList = [...gameListRef.current, ...response.games];

        console.log(newList);

        setGameList(newList);

        setNextPage(response.next);

        setIsFetching(false);
    }

    const lastGameRef = useCallback((node: any) => {
        if (isFetching) return;

        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                getMoreGames();
            }
        });

        if (node) {
            observer.current.observe(node);
        }
    }, []);

    useEffect(() => {
        nextPageRef.current = nextPage;
        gameListRef.current = gameList;
    }, [nextPage, gameList]);

    useEffect(() => {
        (async () => {
            const response = await getAllGames(1);

            setGameList(response.games);
            setNextPage(response.next);
        })();
    }, []);

    useEffect(() => {}, [isFetching]);

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
                                    ? gameList.map((game, index) => {
                                          if (gameList.length === index + 1) {
                                              return (
                                                  <div
                                                      ref={lastGameRef}
                                                      key={`${game.slug}${index}`}
                                                      className="rounded-xl bg-[#282727] mb-4 overflow-hidden md:max-w-[23%] md:mr-3"
                                                  >
                                                      <GameCard
                                                          slug={game.slug}
                                                          gamename={game.name}
                                                          gameImage={game.background_image}
                                                          releaseDate={game.released}
                                                      />
                                                  </div>
                                              );
                                          } else {
                                              return (
                                                  <div
                                                      key={`${game.slug}${index}`}
                                                      className="rounded-xl bg-[#282727] mb-4 overflow-hidden md:max-w-[23%] md:mr-3"
                                                  >
                                                      <GameCard
                                                          slug={game.slug}
                                                          gamename={game.name}
                                                          gameImage={game.background_image}
                                                          releaseDate={game.released}
                                                      />
                                                  </div>
                                              );
                                          }
                                      })
                                    : null}
                            </div>
                        </div>
                    </div>

                    {isFetching ? (
                        <div className="w-full bg-red-500 h-[3vh]">
                            <CircularProgress />
                        </div>
                    ) : null}
                </div>
            )}
        </div>
    );
}
