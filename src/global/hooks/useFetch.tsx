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

  // ======= SAVE THE DATA IN THE VAR 'data' =======
  const handleGetData = async () => {
    setLoading(true);
    // if there is a paramater, the function service need a parameter
    if (param) {
      const { json } = await service<T>(pagination, page, param);
      setData(json);
    } else {
      const { json } = await service<T>(pagination, page);
      setData(json);
    }
    setLoading(false);
  };

  // ======= Show a loader while the loading is true =======
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

  // ======= when the var 'page' change the function has to execute again =======
  useEffect(() => {
    handleGetData();
  }, [page]);

  return { data, handleGetData, loading, handleLoading };
};

export default UseFetch;
