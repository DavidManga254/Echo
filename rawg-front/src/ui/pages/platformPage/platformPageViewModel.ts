import { useApiManager } from '../../../API/apiManager';
import { PageResponseInterface } from '../pageResponseInterface';
import { PlatformInterface } from '../../../API/apiMethods/platformsApi/platformsApi';

export async function getPlatforms(): Promise<PageResponseInterface<PlatformInterface[]>> {
    const getAllPlatforms = useApiManager().getAllPlatforms;

    const response = await getAllPlatforms();

    return {
        responseCode: response.status,
        data: response.data.data,
    };
}
