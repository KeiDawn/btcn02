import { useState, useEffect } from "react";
import { searchMoviesByTitle } from "@/api/movie.api";
import MovieCard from "@/components/ui/MovieCard";

export default function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 10;

  useEffect(() => {
    if (query.trim() === "") {
      setMovies([]);
      return;
    }

    async function fetchSearchResults() {
      setLoading(true);
      try {
        const res = await searchMoviesByTitle(query, page, limit);
        setMovies(res.data);
        setTotalPages(res.pagination.total_pages);
      } catch (error) {
        console.error("Failed to search movies", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSearchResults();
  }, [query, page]);

  const handleInputChange = (e) => {
    setPage(1);
    setQuery(e.target.value);
  };

  const prevPage = () => setPage((p) => Math.max(1, p - 1));
  const nextPage = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <section className="max-w-5xl mx-auto p-4">
      <input
        type="text"
        placeholder="Search movies by title..."
        value={query}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {loading && <p>Loading...</p>}

      {!loading && movies.length === 0 && query !== "" && (
        <p>No movies found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={prevPage}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="self-center">
            Page {page} / {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={page === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
