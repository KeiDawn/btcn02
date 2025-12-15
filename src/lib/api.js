const API_URL = import.meta.env.VITE_API_URL;
const APP_TOKEN = import.meta.env.VITE_APP_TOKEN;

// fetch dùng chung
export async function apiFetch(path, options = {}) {
  const userToken = localStorage.getItem("user_token");

  const headers = {
    "Content-Type": "application/json",
    "x-app-token": APP_TOKEN,
    ...options.headers,
  };

  // nếu đã login thì gắn user token
  if (userToken) {
    headers.Authorization = `Bearer ${userToken}`;
  }

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  });

  const data = await res.json();

  if (!res.ok) {
    throw data;
  }

  return data;
}
