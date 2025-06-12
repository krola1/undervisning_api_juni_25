export default function MovieCard({ title, poster_path, backdrop_path }) {
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/original${poster_path}`
    : null;
  const backgroundUrl = backdrop_path
    ? `https://image.tmdb.org/t/p/original${backdrop_path}`
    : null;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      {/* Blurred background image */}
      {backgroundUrl && (
        <div
          style={{
            backgroundImage: `url(${backgroundUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            transform: "scale(1.05)",
          }}
        />
      )}

      {/* Foreground poster image */}
      {posterUrl && (
        <img
          src={posterUrl}
          alt={title}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />
      )}
    </div>
  );
}
