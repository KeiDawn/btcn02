import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMoviesByPerson } from "@/api/movie.api";
import MovieCard from "@/components/ui/MovieCard";

export default function MovieSearchByPerson() {
  const [searchParams] = useSearchParams();
  const person = searchParams.get("person") || "";

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!person) return;

    async function fetchData() {
      setLoading(true);
      try {
        const res = await searchMoviesByPerson(person);
        setMovies(res.data);
      } catch (error) {
        console.error("Search by person failed", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [person]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Search results for "{person}"</h2>
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
