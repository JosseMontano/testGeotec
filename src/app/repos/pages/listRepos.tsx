import { useParams } from "react-router-dom";
import UseFetch from "../../../global/hooks/useFetch";
import { getRepos } from "../services/listRepos";
import { ListRepos } from "../interfaces/listRepos";
import CardComponent from "../components/card";
import { Grid } from "@mui/material";

const ListRepos = () => {
  const { name } = useParams();
  const { data } = UseFetch<ListRepos[]>({ service: getRepos, param: name });
  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        sx={{ gridTemplateColumns: "repeat(4, minmax(330px, 1fr))" }}
      >
        {data.length > 0 &&
          data.map((v) => (
            <CardComponent
              key={v.id}
              description={v.description}
              name={v.name}
              forksCount={v.forks_count}
              openIssues={v.open_issues}
            />
          ))}
      </Grid>
    </>
  );
};

export default ListRepos;
