import { useEffect, useState } from "react";
import Loader from "../components/loader";
type paramId = string;
interface Params {
  param?: paramId;
  service: <T>(
    perPage: number,
    page: number,
    param?: paramId
  ) => Promise<{
    json: T;
    status: number;
  }>;
  pagination: number;
  page: number;
}

const UseFetch = <T,>({ service, param, pagination, page }: Params) => {
  const [data, setData] = useState<T>({} as T);
  const [loading, setLoading] = useState(true);
  const handleGetUsers = async () => {
    setLoading(true);
    if (param) {
      const { json } = await service<T>(pagination, page, param);
      setData(json);
    } else {
      const { json } = await service<T>(pagination, page);
      setData(json);
    }
    setLoading(false);
  };

  const handleLoading = (heightContainer: number) => {
    if (loading) {
      return (
        <div
          style={{
            height: heightContainer,
            display: "grid",
            placeContent: "center",
          }}
        >
          <Loader />
        </div>
      );
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, [page]);
  return { data, handleGetUsers, loading, handleLoading };
};

export default UseFetch;
