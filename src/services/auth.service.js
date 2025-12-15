const API_URL = import.meta.env.VITE_API_URL;
const APP_TOKEN = import.meta.env.VITE_APP_TOKEN;

export async function loginApi(data) {
  const res = await fetch(`${API_URL}/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-app-token": APP_TOKEN,
    },
    body: JSON.stringify({
      username: data.username,
      password: data.password,
    }),
  });

  const text = await res.text();

  if (!res.ok) {
    throw new Error(text);
  }

  return JSON.parse(text);
}
