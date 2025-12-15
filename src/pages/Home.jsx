import MostPopularMovies from "@/pages/movies/MostPopularMovies";

export default function Home() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Movie Info</h2>
      <p className="text-gray-600 mb-6">
        Search and explore movies and actors.
      </p>
      <MostPopularMovies />
    </section>
  );
}
