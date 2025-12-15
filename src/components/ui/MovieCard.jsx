import { Link } from "react-router-dom";

export default function MovieCard({ movie, className }) {
  return (
    <div className={`w-full rounded-md overflow-hidden shadow-md ${className}`}>
      <Link to={`/movies/${movie.id}`}>
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-80 object-contain rounded-t-md"
        />
      </Link>
      <div className="p-2">
        <Link to={`/movies/${movie.id}`}>
          <h3 className="text-lg font-semibold hover:underline">
            {movie.title}
          </h3>
        </Link>
        <p>Rating: {movie.rate}</p>
      </div>
    </div>
  );
}
