import { apiFetch } from "@/lib/api";

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
