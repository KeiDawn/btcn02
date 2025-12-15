import { useEffect, useState } from "react";
import { getMostPopularMovies } from "@/api/movie.api";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function MostPopularMovies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const limit = 5;

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      try {
        const res = await getMostPopularMovies(1, limit);
        setMovies(res.data);
        setTotalPages(res.data.length);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  const prevPage = () => {
    setPage((p) => Math.max(1, p - 1));
  };
  const nextPage = () => {
    setPage((p) => Math.min(totalPages, p + 1));
  };

  const movie = movies[page - 1];

  return (
    // MostPopularMovies.jsx
    <section className="max-w-5xl mx-auto py-6 px-4 relative">
      {loading ? (
        <p>Loading...</p>
      ) : movies.length > 0 ? (
        <>
          <div className="flex justify-center">
            <div className="flex flex-col items-center max-w-md mx-auto">
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-96 object-contain rounded-md shadow-md cursor-pointer"
                />
              </Link>

              <Link to={`/movies/${movie.id}`}>
                <h3 className="mt-3 text-xl font-semibold text-center cursor-pointer hover:underline">
                  {movie.title}
                </h3>
              </Link>

              <p className="mt-1 text-center text-gray-600">
                Rating: {movie.rate}
              </p>
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={prevPage}
            disabled={page === 1}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-200 rounded-full p-2 disabled:opacity-30"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextPage}
            disabled={page === totalPages}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-200 rounded-full p-2 disabled:opacity-30"
          >
            <ChevronRight size={24} />
          </button>
        </>
      ) : (
        <p>No movies to display</p>
      )}
    </section>
  );
}
