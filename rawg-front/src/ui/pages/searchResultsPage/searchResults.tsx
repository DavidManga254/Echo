import { useLocation } from 'react-router-dom';
import { searchGame } from './searchResultsViewModel';
import { useEffect, useState } from 'react';
import { SingleGameInterface } from '../../../API/apiMethods/gamesApi/gamesApi';
import { LoadingBackdrop } from '../../common/loadingModal/loadingmodal';
import { GameCard } from '../../common/gameCard/gameCard';

export function SearchResultsPage() {
    const location = useLocation();
    const [searchResults, setsearchResuls] = useState<SingleGameInterface[] | [] | null>(null);
    const queryParams = new URLSearchParams(location.search);

    const searchQuery = queryParams.get('query');

    useEffect(() => {
        (async () => {
            setsearchResuls(null);
            const response = await searchGame(searchQuery as string);
            const searchResultsResponse = response.data?.length === 0 ? [] : response.data;

            setsearchResuls(searchResultsResponse);
        })();
    }, [searchQuery]);

    return (
        <div>
            {searchResults === null ? (
                <LoadingBackdrop />
            ) : (
                <div>
                    <div className="min-h-[110vh]">
                        <div className="mb-4 ">
                            <div>
                                <h2 className="sm:text-xl mb-1 font-bold lg:text-7xl">
                                    {`Search results for ${searchQuery}`}
                                </h2>
                                <p className="sm:text-xs mb-4 lg:text-xl">
                                    Based on player counts and release date
                                </p>
                            </div>
                            <div>
                                {/* <button className="p-1 text-sm bg-gray-700 text-white sm:mt-2 rounded-md">
                            Order by <span className="font-bold">{orderCriteria}</span>
                            <KeyboardArrowDownIcon />
                        </button> */}
                            </div>
                        </div>
                        <div>
                            <div className="md:flex md:flex-row md:flex-wrap">
                                {searchResults.length > 0
                                    ? searchResults.map((game, index) => {
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
                                      })
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
