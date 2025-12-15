import { apiFetch } from "@/lib/api";

export async function getPersonList(q = "", page = 1, limit = 10) {
  const query = q
    ? `?q=${encodeURIComponent(q)}&page=${page}&limit=${limit}`
    : `?page=${page}&limit=${limit}`;
  return await apiFetch(`/persons${query}`);
}

export async function getPersonDetail(id) {
  return await apiFetch(`/persons/${id}`);
}
