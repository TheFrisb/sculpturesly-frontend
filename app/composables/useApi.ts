export const useAPI = <T>(
    url: string | (() => string),
    options: any = {}
) => {
    const config = useRuntimeConfig()
    const baseURL = import.meta.server
        ? config.apiInternal
        : ''

    const headers = useRequestHeaders(['cookie'])

    return useFetch<T>(url, {
        baseURL: baseURL,
        credentials: 'include',
        ...options,

        headers: {
            Accept: 'application/json',
            ...headers,
            ...options.headers,
        },
    })
}