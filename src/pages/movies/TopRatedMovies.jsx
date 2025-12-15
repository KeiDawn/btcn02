import { useEffect, useState } from "react";
import { getTopRatedMovies } from "@/api/movie.api";
import MovieCard from "@/components/ui/MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TopRatedMovies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const limit = 3; // 3 movies per page

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      try {
        const res = await getTopRatedMovies(page, limit);
        setMovies(res.data);
        setTotalPages(res.pagination.total_pages);
      } catch (error) {
        console.error("Failed to fetch top rated movies", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [page]);

  const prevPage = () => {
    setPage((p) => Math.max(1, p - 1));
  };
  const nextPage = () => {
    setPage((p) => Math.min(totalPages, p + 1));
  };

  return (
    <section className="relative max-w-4xl mx-auto py-6 px-4">
      <h2 className="text-2xl font-bold mb-4">Top Rating</h2>

      {loading ? (
        <p>Loading...</p>
      ) : movies.length > 0 ? (
        <>
          {/* Prev button */}
          <button
            onClick={prevPage}
            disabled={page === 1}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-200 rounded-full p-2 disabled:opacity-30 z-10"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Movie cards container */}
          <div className="flex justify-center items-center space-x-6 overflow-hidden">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} className="w-60" />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={nextPage}
            disabled={page === totalPages}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-200 rounded-full p-2 disabled:opacity-30 z-10"
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
