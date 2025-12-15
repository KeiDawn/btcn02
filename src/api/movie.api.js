import { apiFetch } from "@/lib/api";

export async function getMostPopularMovies(page = 1, limit = 5) {
  // API endpoint: /movies/most-popular
  // Params: page, limit
  return await apiFetch(`/movies/most-popular?page=${page}&limit=${limit}`);
}

export async function getPopularMovies(page = 1, limit = 15) {
  return await apiFetch(`/movies/most-popular?page=${page}&limit=${limit}`);
}

export async function getTopRatedMovies(page = 1, limit = 3) {
  // API endpoint: /movies/top-rated
  // Params: page, limit, category = 'IMDB_TOP_50' (default)
  return await apiFetch(
    `/movies/top-rated?category=IMDB_TOP_50&page=${page}&limit=${limit}`
  );
}

export async function searchMoviesByTitle(title, page = 1, limit = 10) {
  return await apiFetch(
    `/movies/search?title=${encodeURIComponent(
      title
    )}&page=${page}&limit=${limit}`
  );
}

export async function searchMovies(query, page = 1, limit = 30) {
  return await apiFetch(
    `/movies/search?q=${encodeURIComponent(query)}&page=${page}&limit=${limit}`
  );
}
