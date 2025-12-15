import { cn } from "@/lib/utils";

export default function MovieCard({ movie, className }) {
  return (
    <div
      className={cn(
        "w-48 h-72 rounded-md overflow-hidden shadow-md",
        className
      )}
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
