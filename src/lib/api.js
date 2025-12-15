const API_URL = import.meta.env.VITE_API_URL;
const APP_TOKEN = import.meta.env.VITE_APP_TOKEN;

export async function apiFetch(path, options = {}) {
  const userToken = localStorage.getItem("user_token");

  const headers = {
    "Content-Type": "application/json",
    "x-app-token": APP_TOKEN,
    ...options.headers,
  };

  if (userToken) {
    headers.Authorization = `Bearer ${userToken}`;
  }

  const fullUrl = `${API_URL}${path}`;
  console.log("Fetching URL:", fullUrl);

  const res = await fetch(fullUrl, {
    ...options,
    headers,
  });

  const text = await res.text();
  try {
    const data = JSON.parse(text);
    if (!res.ok) {
      throw data;
    }
    return data;
  } catch (err) {
    console.error("Failed to parse JSON response:", text);
    throw new Error(`Invalid JSON response from server`);
  }
}
