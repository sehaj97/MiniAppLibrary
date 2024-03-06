import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())
function useApiFetch(api) {
    const { data, error, isLoading } = useSWR(api, fetcher);
    return {
        flagData: data,
        isLoading,
        isError: error
    }
}
export default useApiFetch;