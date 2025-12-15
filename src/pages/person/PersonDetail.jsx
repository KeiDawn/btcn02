import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPersonDetail } from "@/api/person.api";
import MovieCard from "@/components/ui/MovieCard";

export default function PersonDetail() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPerson() {
      setLoading(true);
      try {
        const data = await getPersonDetail(id);
        setPerson(data);
      } catch (err) {
        setError(err.message || "Failed to load person detail");
      } finally {
        setLoading(false);
      }
    }
    fetchPerson();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!person) return <p>Person not found</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Person info */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <img
          src={person.image}
          alt={person.name}
          className="w-48 h-64 object-cover rounded-md shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{person.name}</h1>
          <p className="mb-1">
            <strong>Role:</strong> {person.role}
          </p>
          {person.birth_date && (
            <p>
              <strong>Birth Date:</strong> {person.birth_date}
            </p>
          )}
          {person.death_date && (
            <p>
              <strong>Death Date:</strong> {person.death_date}
            </p>
          )}
          {person.height && (
            <p>
              <strong>Height:</strong> {person.height}
            </p>
          )}
          {person.summary && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-1">Biography</h2>
              <p>{person.summary}</p>
            </div>
          )}
        </div>
      </div>

      {/* Movies participated */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Movies participated</h2>
        {person.known_for && person.known_for.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {person.known_for.map((movie) => (
              <div
                key={movie.id}
                className="border rounded-md p-3 shadow hover:shadow-lg transition"
              >
                <MovieCard movie={movie} />
                <h3 className="mt-2 font-semibold">
                  {movie.title} ({movie.year})
                </h3>
                <p>
                  <strong>Role:</strong> {movie.role}
                </p>
                {movie.character && (
                  <p>
                    <strong>Character:</strong> {movie.character}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
}
