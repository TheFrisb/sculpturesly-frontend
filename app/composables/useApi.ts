export const useAPI = <T>(
    url: string | (() => string),
    options: any = {}
) => {
    const config = useRuntimeConfig()
    const headers = useRequestHeaders(['cookie'])

    return useFetch<T>(url, {
        baseURL: config.public.apiBase as string,
        credentials: 'include',
        ...options,

        headers: {
            Accept: 'application/json',
            ...headers,
            ...options.headers,
        },
    })
}