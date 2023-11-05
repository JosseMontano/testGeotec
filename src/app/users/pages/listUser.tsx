import { ListUser } from "../interfaces/listUser";
import CardComponent from "../components/card";
import { Grid } from "@mui/material";
import UseRedirect from "../../../global/hooks/useRedirect";
import UseFetch from "../../../global/hooks/useFetch";
import { getUsers } from "../services/listUser";

const ListUser = () => {
  //get repos
  const { data } = UseFetch<ListUser[]>({ service: getUsers });

  //redirect to repost
  const { handleRedirect } = UseRedirect();

  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        sx={{ gridTemplateColumns: "repeat(4, minmax(330px, 1fr))" }}
      >
        {data.length > 0 && data.map((v) => (
          <CardComponent
            nameUser={v.login}
            photo={v.avatar_url}
            pageUser={v.html_url}
            handleRedirect={handleRedirect}
            key={v.id}
          />
        ))}
      </Grid>
    </>
  );
};

export default ListUser;
