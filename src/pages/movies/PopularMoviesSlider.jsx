import { useEffect, useState } from "react";
import { getPopularMovies } from "@/api/movie.api";
import MovieCard from "@/components/ui/MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PopularMoviesSlider() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const limit = 15;
  const moviesPerPage = 3;

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      try {
        const res = await getPopularMovies(page, limit);
        setMovies(res.data);
        setTotalPages(Math.ceil(res.data.length / moviesPerPage));
      } catch (error) {
        console.error("Failed to fetch popular movies", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [page]);

  const startIndex = (page - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = movies.slice(startIndex, endIndex);

  const prevPage = () => {
    setPage((p) => Math.max(1, p - 1));
  };
  const nextPage = () => {
    setPage((p) => Math.min(totalPages, p + 1));
  };

  return (
    <section className="max-w-5xl mx-auto py-6 px-4 relative">
      <h2 className="text-2xl font-bold mb-4">Most Popular</h2>

      {loading ? (
        <p>Loading...</p>
      ) : movies.length > 0 ? (
        <>
          <div className="flex space-x-4 overflow-hidden">
            {currentMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                className="min-w-[200px]"
              />
            ))}
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
