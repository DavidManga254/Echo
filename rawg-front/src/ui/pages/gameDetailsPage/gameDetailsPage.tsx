import { GameCard } from '../../common/gameCard/gameCard';
import ModeCommentRoundedIcon from '@mui/icons-material/ModeCommentRounded';
import { ShowMoreText } from '../../common/textExpand/textExpand';
export function GameDetails() {
    return (
        <div>
            <div>
                {/* first column */}
                <div>
                    <div>
                        <p className="sm:text-center text-xs sm:mb-4 text-gray-400">
                            HOME/GAMES/BALDUR'S GATE III
                        </p>
                        <div className="flex flex-row justify-center sm:mb-7 ">
                            <button className="sm:text-xs text-black bg-white rounded p-1 font-semibold">
                                AUG 3,2023
                            </button>
                        </div>
                        <div className="sm:mb-5">
                            <h1 className="sm:text-center sm:text-3xl font-bold">
                                BALDUR'S GATE III
                            </h1>
                        </div>
                    </div>
                    <div className="sm:flex sm:flex-row sm:flex-wrap sm:mb-5">
                        <img
                            className="w-[47.5%] m-1"
                            src="https://media.rawg.io/media/resize/200/-/screenshots/a67/a676cdec0eadc42a133ac49e7f2e1aac.jpg"
                        />
                        <img
                            className="w-[47.5%] m-1"
                            src="https://media.rawg.io/media/resize/200/-/screenshots/a67/a676cdec0eadc42a133ac49e7f2e1aac.jpg"
                        />
                        <img
                            className="w-[47.5%] m-1"
                            src="https://media.rawg.io/media/resize/200/-/screenshots/a67/a676cdec0eadc42a133ac49e7f2e1aac.jpg"
                        />
                        <img
                            className="w-[47.5%] m-1"
                            src="https://media.rawg.io/media/resize/200/-/screenshots/a67/a676cdec0eadc42a133ac49e7f2e1aac.jpg"
                        />
                    </div>
                    <div className="sm:w-full">
                        <button className="sm:w-full bg-white mt-3 mb-3 rounded text-left p-1">
                            <span className="sm:text-xs text-gray-500">
                                Add to
                            </span>
                            <br />
                            <span className="text-black sm:text-">
                                My games
                            </span>
                        </button>
                        <p className=" text-gray-500 text-center sm:text-sm">
                            Last modified{' '}
                        </p>
                    </div>
                    <div className="mt-3 mb-3">
                        <button className="bg-[#323131] sm:w-full p-2 rounded text-gray-500 sm:text-sm">
                            <ModeCommentRoundedIcon /> Write a comment
                        </button>
                    </div>
                    <div>
                        <p>
                            <ShowMoreText
                                text="Gather your party, and return to the
                            Forgotten Realms in a tale of fellowship
                            and betrayal, sacrifice and survival, and
                            the lure of absolute power. Mysterious
                            abilities are awakening inside you, drawn
                            from a Mind Flayer parasite planted in
                            your brain. Resist, and turn darkness
                            against itself. Or embrace corruption, and
                            become ultimate evil. From the creators of
                            Divinity: Original Sin 2 comes a
                            next-generation RPG, set in the world of
                            Dungeons and Dragons. Choose from a wide
                            selection of D&D races and classes, or
                            play as an origin character with a
                            hand-crafted background. Adventure, loot,
                            battle and romance as you journey through
                            the Forgotten Realms and beyond. Play
                            alone, and select your companions
                            carefully, or as a party of up to four in
                            multiplayer. Abducted, infected, lost. You
                            are turning into a monster, but as the
                            corruption inside you grows, so does your
                            power. That power may help you to survive,
                            but there will be a price to pay, and more
                            than any ability, the bonds of trust that
                            you build within your party could be your
                            greatest strength. Caught in a conflict
                            between devils, deities, and sinister
                            otherworldly forces, you will determine
                            the fate of the Forgotten Realms together.
                            Forged with the new Divinity 4.0 engine,
                            Baldur’s Gate 3 gives you unprecedented
                            freedom to explore, experiment, and
                            interact with a world that reacts to your
                            choices. A grand, cinematic narrative
                            brings you closer to your characters than
                            ever before, as you venture through our
                            biggest world yet. The Forgotten Realms
                            are a vast, detailed and diverse world,
                            and there are secrets to be discovered all
                            around you -- verticality is a vital part
                            of exploration. Sneak, dip, shove, climb,
                            and jump as you journey from the depths of
                            the Underdark to the glittering rooftops
                            of the Upper City. How you survive, and
                            the mark you leave on the world, is up to
                            you."
                                maxLength={300}
                            />
                        </p>
                    </div>
                    <div className="flex flex-row justify-between mt-4">
                        <div className="w-1/2">
                            <div className="mb-2">
                                <h4 className="text-[#474747] font-semibold">
                                    plartforms
                                </h4>
                                <div className="flex flex-wrap">
                                    <span className="sm:text-sm underline underline-offset-1 mr-1">
                                        mac
                                    </span>
                                    <span className="sm:text-sm underline underline-offset-1 mr-1">
                                        mac
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div>
                                <h4 className="text-[#474747] font-semibold">
                                    Metascore
                                </h4>
                                <button className=" border-green-500 p-1 text-green-500 border-solid border-2 aspect-square rounded sm:text-sm">
                                    97
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Tags</h3>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Where to buy</h3>
                        <div>
                            <button></button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h2>More games like</h2>
                    <div>
                        <GameCard />
                        <GameCard />
                        <GameCard />
                        <GameCard />
                        <GameCard />
                        <GameCard />
                        <GameCard />2
                    </div>
                </div>
            </div>
        </div>
    );
}
