import { useEffect, useState } from "react";
import { getUsers } from "../services/listUser";
import { ListUser } from "../interfaces/listUser";
import CardComponent from "../components/card";
import { Grid } from "@mui/material";
import UseRedirect from "../../../global/hooks/useRedirect";

const ListUser = () => {
  const [data, setData] = useState<ListUser[]>([]);
  const handleGetUsers = async () => {
    const { json } = await getUsers<ListUser[]>();
    setData(json);
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  //redirect to repost
  const { handleRedirect } = UseRedirect();

  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        sx={{ gridTemplateColumns: "repeat(4, minmax(330px, 1fr))" }}
      >
        {data.map((v) => (
          <CardComponent
            nameUser={v.login}
            photo={v.avatar_url}
            pageUser={v.html_url}
            handleRedirect={handleRedirect}
          />
        ))}
      </Grid>
    </>
  );
};

export default ListUser;
