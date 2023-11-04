import { useEffect } from "react";
import { getUsers } from "../services/listUser";

const ListUser = () => {
  const handleGetUsers = async () => {
    await getUsers();
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return <div>ListUser</div>;
};

export default ListUser;
