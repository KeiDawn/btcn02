const API_URL = import.meta.env.VITE_API_URL;
const APP_TOKEN = import.meta.env.VITE_APP_TOKEN;

export async function getTop5MostPopularMovies() {
  const res = await fetch(`${API_URL}/api/movies/most-popular?limit=5`, {
    headers: {
      "Content-Type": "application/json",
      "x-app-token": APP_TOKEN,
    },
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(errText);
  }

  const data = await res.json();
  return data.data;
}
