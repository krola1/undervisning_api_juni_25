import MovieCard from "./MovieCard.jsx";
import tmdb from "../api.js";
import { useQuery } from "@tanstack/react-query";
///--swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCube } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cube";

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
    <div style={{ height: "100svh", display: "flex", alignItems: "center" }}>
      {data.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}
