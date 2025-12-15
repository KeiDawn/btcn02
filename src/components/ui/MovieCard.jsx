import { Link } from "react-router-dom";

export default function MovieCard({ movie, className = "" }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div
        className={`
          group relative
          w-full
          transition-transform duration-300
          hover:scale-110 hover:-translate-y-6
          ${className}
        `}
      >
        {/* POSTER FRAME */}
        <div
          className="
            h-[320px]
            overflow-hidden
            rounded-md
            bg-white
            shadow-md
          "
        >
          <img
            src={movie.image}
            alt={movie.title}
            className="
              w-full h-full
              object-cover
              transition-transform duration-300
              group-hover:scale-105
            "
          />
        </div>

        {/* INFO */}
        <div className="mt-2 text-center">
          <h3 className="text-lg font-semibold text-black leading-tight">
            {movie.title}
          </h3>

          <p className="text-sm text-black">
            ⭐ {movie.rate ?? "N/A"}
            {movie.year && ` • ${movie.year}`}
          </p>
        </div>
      </div>
    </Link>
  );
}
