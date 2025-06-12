export default function MovieCard({ title, poster_path }) {
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : null;

  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
}
