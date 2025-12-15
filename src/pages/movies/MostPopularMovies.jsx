import { useEffect, useState } from "react";
import { getMostPopularMovies } from "@/api/movie.api";
import MovieCard from "@/components/ui/MovieCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MostPopularMovies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const limit = 5; // Lấy 5 phim ở lần gọi đầu tiên

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      try {
        const res = await getMostPopularMovies(1, limit); // Lấy 5 phim một lần
        setMovies(res.data);
        setTotalPages(res.data.length); // tổng phim trong mảng (có thể khác với pagination)
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

  return (
    <section className="max-w-5xl mx-auto py-6 px-4 relative">
      <h2 className="text-2xl font-bold mb-4">Top 5 Phim Doanh Thu Cao Nhất</h2>

      {loading ? (
        <p>Loading...</p>
      ) : movies.length > 0 ? (
        <>
          <div className="flex justify-center">
            <MovieCard movie={movies[page - 1]} className="max-w-md" />
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

          <p className="text-center mt-2">
            Phim {page} / {totalPages}
          </p>
        </>
      ) : (
        <p>Không có phim để hiển thị</p>
      )}
    </section>
  );
}
