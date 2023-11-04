import { getRestApi } from "../../../global/utilities/restApi";

export const getUsers = async <T,>() => {
  const { json, status } = await getRestApi<T>("users");
  return { json, status };
};
