import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "@/api/movie.api";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDetail() {
      setLoading(true);
      try {
        const res = await getMovieDetail(id);
        setMovie(res);
      } catch (err) {
        setError("Failed to load movie details");
      } finally {
        setLoading(false);
      }
    }
    fetchDetail();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!movie) return <p>No movie found</p>;

  return (
    <section className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">
        {movie.full_title || movie.title}
      </h1>
      <p className="mb-4 text-gray-600">{movie.year}</p>

      <img
        src={movie.image}
        alt={movie.title}
        className="w-full max-w-md rounded-md mb-4"
      />

      <p>
        <strong>Rating:</strong> {movie.rate}
      </p>
      <p>
        <strong>Genres:</strong> {movie.genres.join(", ")}
      </p>
      <p>
        <strong>Runtime:</strong> {movie.runtime}
      </p>

      <p
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: movie.plot_full }}
      ></p>

      {movie.awards && (
        <p className="mt-4">
          <strong>Awards:</strong> {movie.awards}
        </p>
      )}

      {movie.box_office && (
        <div className="mt-4">
          <strong>Box Office:</strong>
          <ul className="list-disc list-inside">
            {Object.entries(movie.box_office).map(([key, value]) => (
              <li key={key}>
                <span className="capitalize">
                  {key.replace(/([A-Z])/g, " $1").toLowerCase()}:
                </span>{" "}
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Directors */}
      {movie.directors && movie.directors.length > 0 && (
        <div className="mt-4">
          <h2 className="font-semibold">Directors:</h2>
          <ul>
            {movie.directors.map((d) => (
              <li key={d.id}>
                {d.name} ({d.role})
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Actors */}
      {movie.actors && movie.actors.length > 0 && (
        <div className="mt-4">
          <h2 className="font-semibold">Actors:</h2>
          <ul>
            {movie.actors.map((a) => (
              <li key={a.id}>
                {a.name} as {a.character || "N/A"}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Reviews */}
      {movie.reviews && movie.reviews.length > 0 && (
        <div className="mt-4">
          <h2 className="font-semibold">Reviews:</h2>
          <ul>
            {movie.reviews.map((r) => (
              <li key={r.id} className="mb-2">
                <strong>{r.username}</strong> ({r.rate} / 10): {r.title}
                <p>{r.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Similar movies */}
      {movie.similar_movies && movie.similar_movies.length > 0 && (
        <div className="mt-4">
          <h2 className="font-semibold">Similar Movies:</h2>
          <ul className="flex space-x-4 overflow-x-auto">
            {movie.similar_movies.map((m) => (
              <li key={m.id} className="min-w-[150px]">
                <img src={m.image} alt={m.title} className="rounded" />
                <p className="text-sm">
                  {m.title} ({m.year})
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
