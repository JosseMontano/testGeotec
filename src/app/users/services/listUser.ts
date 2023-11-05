import { getRestApi } from "../../../global/utilities/restApi";

export const getUsers = async <T>(perPage: number, since: number) => {
  const url = `users?per_page=${perPage}&since=${since}`;
  const { json, status } = await getRestApi<T>(url);
  return { json, status };
};
