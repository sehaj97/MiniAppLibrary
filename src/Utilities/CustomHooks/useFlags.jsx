import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())
function useFlags() {
    const { data, error, isLoading } = useSWR('https://countriesnow.space/api/v0.1/countries/flag/images', fetcher);
    return {
        flagData: data,
        isLoading,
        isError: error
    }
}
export default useFlags;