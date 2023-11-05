import { endpoint } from "../config/endpoint";

export async function getRestApi<T>(
  url: string
): Promise<{ json: T; status: number }> {
  const response = await fetch(endpoint + url, {
    method: "GET",
    headers: {
      "authorization": "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",
    },
  });
  const json = await response.json();
  const status = response.status;
  return { json, status };
}
