import { useEffect, useState } from 'react';
import { getPlatforms } from './platformPageViewModel';
import { PlatformCard } from '../../common/platformsCard/platformsCard';
import { PlatformInterface } from '../../../API/apiMethods/platformsApi/platformsApi';
import { LoadingBackdrop } from '../../common/loadingModal/loadingmodal';
export function PlatformsPage() {
    const [platformsList, setPlatformsList] = useState<PlatformInterface[] | null>(null);

    useEffect(() => {
        (async () => {
            const response = await getPlatforms();

            setPlatformsList(response.data);
        })();
    }, []);
    return (
        <div>
            <div className="mb-4 ">
                <div>
                    <h2 className="sm:text-xl mb-1 font-bold lg:text-7xl">Platforms</h2>
                </div>
            </div>
            <div className="flex flex-row flex-wrap">
                {platformsList === null ? (
                    <LoadingBackdrop />
                ) : (
                    platformsList.map((platform, index) => {
                        return (
                            <div
                                key={`${platform.slug}${index}`}
                                className="rounded-xl mb-4 overflow-hidden sm:w-full md:min-w-[24%] md:max-w-[24%] md:mr-3 aspect-[16/15]"
                            >
                                <PlatformCard
                                    platformImage={platform.background_image}
                                    platformName={platform.name}
                                    platformSlug={platform.slug}
                                    top_3_games={platform.top_3_games}
                                />
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}
