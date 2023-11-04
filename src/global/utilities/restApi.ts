import { endpoint } from "../config/endpoint";

export async function getRestApi<T>(
  url: string
): Promise<{ json: T; status: number }> {
  const response = await fetch(endpoint + url, {
    method: "GET",
  });
  const json = await response.json();
  const status = response.status;
  return { json, status };
}
