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
      <Swiper
        modules={[Navigation, EffectCube]}
        effect="cube"
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.9,
        }}
        navigation
        slidesPerView={1}
        spaceBetween={0}
        style={{ width: "90svw", height: "70svh" }}
      >
        {data.map((movie) => (
          <SwiperSlide key={movie.id}>
            {/* <div style={{ height: "100%" }}> */}
            <MovieCard {...movie} />
            {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
