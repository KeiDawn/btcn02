import { apiFetch } from "@/lib/api";

export async function getMostPopularMovies(page = 1, limit = 5) {
  // API endpoint: /movies/most-popular
  // Params: page, limit
  return await apiFetch(`/movies/most-popular?page=${page}&limit=${limit}`);
}

export async function getPopularMovies(page = 1, limit = 15) {
  return await apiFetch(`/movies/most-popular?page=${page}&limit=${limit}`);
}
