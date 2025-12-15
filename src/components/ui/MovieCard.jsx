// src/components/ui/MovieCard.jsx
import { cn } from "@/lib/utils";

export default function MovieCard({ movie, className }) {
  return (
    <div
      className={cn(
        "bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer",
        className
      )}
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-3">
        <h3 className="font-semibold text-lg">{movie.title}</h3>
        <p className="text-sm text-gray-500">{movie.year}</p>
        <p className="text-sm text-yellow-500">Rating: {movie.rate}</p>
      </div>
    </div>
  );
}
