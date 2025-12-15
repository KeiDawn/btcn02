import { apiFetch } from "@/lib/api";
const API_URL = import.meta.env.VITE_API_URL;
const APP_TOKEN = import.meta.env.VITE_APP_TOKEN;

export function loginApi(data) {
  return apiFetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function logoutApi() {
  return apiFetch("/api/users/logout", {
    method: "POST",
  });
}

export async function registerApi(data) {
  const res = await fetch(`${API_URL}/api/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-app-token": APP_TOKEN,
    },
    body: JSON.stringify(data),
  });

  const text = await res.text();

  if (!res.ok) {
    throw new Error(text);
  }

  return JSON.parse(text);
}
