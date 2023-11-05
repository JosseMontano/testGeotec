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
