import { apiFetch } from "@/lib/api";

export async function getMostPopularMovies(page = 1, limit = 5) {
  return await apiFetch(`/movies/most-popular?page=${page}&limit=${limit}`);
}

export async function getPopularMovies(page = 1, limit = 15) {
  return await apiFetch(`/movies/most-popular?page=${page}&limit=${limit}`);
}

export async function getTopRatedMovies(page = 1, limit = 3) {
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

export async function searchMoviesByPerson(person, page = 1, limit = 30) {
  return await apiFetch(
    `/movies/search?person=${encodeURIComponent(
      person
    )}&page=${page}&limit=${limit}`
  );
}

export async function getMovieDetail(id) {
  return await apiFetch(`/movies/${id}`);
}
