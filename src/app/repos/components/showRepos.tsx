import { ListRepos } from "../interfaces/listRepos";
import { sizeCard } from "../styles/card";
import CardComponent from "./card";
import { Grid } from "@mui/material";

interface Params {
  data: ListRepos[];
  loading: boolean;
  handleLoading: (heightContainer: number) => JSX.Element | undefined;
}

const ShowRepos = ({ data, loading, handleLoading }: Params) => {
  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{ gridTemplateColumns: "repeat(4, minmax(330px, 1fr))" }}
    >
      {/* ========= SHOW LOADING =========*/}
      {handleLoading((sizeCard.height + 16) * 2)}

      {/* ========= SHOW DATA =========*/}
      {!loading &&
        data.map((v) => (
          <CardComponent
            key={v.id}
            description={v.description}
            name={v.name}
            forksCount={v.forks_count}
            openIssues={v.open_issues}
            fullName={v.full_name}
          />
        ))}
    </Grid>
  );
};

export default ShowRepos;
