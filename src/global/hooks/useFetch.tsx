import { useEffect, useState } from "react";
type paramId = string;
interface Params {
  param?: paramId;
  service: <T>(param?: paramId) => Promise<{
    json: T;
    status: number;
  }>;
}

const UseFetch = <T,>({ service, param }: Params) => {
  const [data, setData] = useState<T>({} as T);
  const handleGetUsers = async () => {
    if (param) {
      const { json } = await service<T>(param);
      setData(json);
      return;
    }
    const { json } = await service<T>();
    setData(json);
  };

  useEffect(() => {
    handleGetUsers();
  }, []);
  return { data, handleGetUsers };
};

export default UseFetch;
