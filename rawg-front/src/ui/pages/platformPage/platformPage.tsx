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
        <div className="flex flex-row flex-wrap">
            {platformsList === null ? (
                <LoadingBackdrop />
            ) : (
                platformsList.map((platform, index) => {
                    return (
                        <div
                            key={`${platform.slug}${index}`}
                            className="rounded-xl mb-4 overflow-hidden md:min-w-[24%] md:max-w-[24%] md:mr-3 aspect-[16/15]"
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
    );
}
