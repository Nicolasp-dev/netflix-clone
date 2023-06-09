import usesSWR from "swr";
import fetcher from "@/lib/fetcher";

const useMovieList = () => {
  const { data, error, isLoading } = usesSWR("/api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, error, isLoading };
};

export default useMovieList;
