import { useState } from "react";

export default function MovieCard({ movie, className }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-full h-80 rounded-md overflow-hidden shadow-md cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with scale effect on hover */}
      <img
        src={movie.image}
        alt={movie.title}
        className={`w-full h-full object-contain transition-transform duration-300 ${
          isHovered ? "scale-105" : "scale-100"
        }`}
      />

      {/* Info overlay below the image, slide up or fade in */}
      <div
        className={`absolute left-0 right-0 bottom-0 bg-black bg-opacity-60 text-white text-center p-2 transition-all duration-300 ${
          isHovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-sm">{movie.year}</p>
      </div>
    </div>
  );
}
