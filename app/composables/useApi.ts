export const useAPI = <T>(
    url: string | (() => string),
    options: any = {}
) => {
    const config = useRuntimeConfig()
    const baseURL = import.meta.server
        ? config.apiInternal
        : ''

    const headers = useRequestHeaders(['cookie'])

    const extraHeaders: Record<string, string> = {}

    return useFetch<T>(url, {
        baseURL: baseURL,
        credentials: 'include',
        ...options,

        headers: {
            Accept: 'application/json',
            ...headers,
            ...extraHeaders,
            ...options.headers,
        },
    })
}