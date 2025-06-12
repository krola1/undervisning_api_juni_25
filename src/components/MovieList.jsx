import MovieCard from "./MovieCard.jsx";
import tmdb from "../api.js";
import { useQuery } from "@tanstack/react-query";

/// ----axios fetch function
const fetchPopularMovies = async () => {
  const response = await tmdb.get("movie/popular");
  return response.data.results;
};

//-------main function
export default function MovieList() {
  //---- usequery
  const { data, isLoading, error } = useQuery({
    queryKey: ["fetchPopularMovies"],
    queryFn: fetchPopularMovies,
  });

  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>feil: {error.message}</p>;

  return (
    <div>
      {data.map((movie) => (
        <MovieCard {...movie} />
      ))}
    </div>
  );
}
