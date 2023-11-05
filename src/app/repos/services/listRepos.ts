import { getRestApi } from "../../../global/utilities/restApi";

export const getRepos = async <T>(userName?: string) => {
  const { json, status } = await getRestApi<T>(`users/${userName}/repos`);
  return { json, status };
};
