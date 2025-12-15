import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "@/api/movie.api"; // Bạn tạo hàm này gọi API tìm kiếm
import MovieCard from "@/components/ui/MovieCard";

export default function MovieSearch() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;

    async function fetchData() {
      setLoading(true);
      try {
        const res = await searchMovies(query);
        setMovies(res.data);
      } catch (error) {
        console.error("Search failed", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Search results for "{query}"</h2>
      {loading && <p>Loading...</p>}
      {!loading && movies.length === 0 && <p>No movies found.</p>}
      <div className="grid grid-cols-3 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
