export default function MovieCard({ title, poster_path }) {
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : null;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${posterUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3>{title}</h3>
    </div>
  );
}
