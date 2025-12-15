import { cn } from "@/lib/utils";

export default function MovieCard({ movie, className }) {
  return (
    <div className={className}>
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-64 object-contain bg-gray-200 rounded-md"
      />
    </div>
  );
}
