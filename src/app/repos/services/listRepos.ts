import { getRestApi } from "../../../global/utilities/restApi";

export const getRepos = async <T>(
  perPage: number,
  page: number,
  userName?: string
) => {
  const url = `users/${userName}/repos?per_page=${perPage}&page=${page}`;
  const { json, status } = await getRestApi<T>(url);
  return { json, status };
};
