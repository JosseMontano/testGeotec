import { useEffect, useState } from "react";
import { getUsers } from "../services/listUser";
import { ListUser } from "../interfaces/listUser";

const ListUser = () => {
  const [data, setData] = useState<ListUser[]>([]);
  const handleGetUsers = async () => {
    const { json } = await getUsers<ListUser[]>();
    setData(json);
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <div>
      {data.map((v) => (
        <div>
          <p>{v.following_url}</p>
        </div>
      ))}
    </div>
  );
};

export default ListUser;
