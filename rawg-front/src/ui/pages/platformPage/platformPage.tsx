import { useEffect } from 'react';
import { getPlatforms } from './platformPageViewModel';
export function PlatformsPage() {
    useEffect(() => {
        async () => {
            const response = await getPlatforms();

            console.log(response);
        };
    }, []);
    return <div>platforms page</div>;
}
