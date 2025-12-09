import type {NitroFetchOptions, NitroFetchRequest} from 'nitropack';

export const fetchWithDefaults = <T>(
    request: NitroFetchRequest,
    options: NitroFetchOptions<NitroFetchRequest> = {}
) => {
    const config = useRuntimeConfig();
    const baseURL = import.meta.client ? '' : config.apiInternal;


    const csrfToken = useCookie('csrftoken');

    const headers = {
        'Accept': 'application/json',
        'X-CSRFToken': csrfToken.value || '',
        ...options.headers
    };

    return $fetch<T>(request, {
        baseURL,
        credentials: 'include',
        ...options,
        headers
    });
};