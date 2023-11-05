import { useState } from "react";
import UseFetch from "../../../global/hooks/useFetch";
import { getRepos } from "../services/listRepos";
import { ListRepos } from "../interfaces/listRepos";
import CardComponent from "../components/card";
//css
import { Grid, Button, Box, Typography } from "@mui/material";
//routes
import { useParams } from "react-router-dom";
import { sizeCard } from "../styles/card";

type opChangePage = "goOn" | "goBack";

const ListRepos = () => {
  const { name } = useParams();
  // ======== pagination ========
  const pagination = 8;
  const [numberPage, setNumberPage] = useState(1);

  // ======== fetch ========
  const { data, loading, handleLoading } = UseFetch<ListRepos[]>({
    service: getRepos,
    param: name,
    pagination: pagination,
    page: numberPage,
  });

  const handleChangePage = (op: opChangePage) => {
    if (op == "goOn") {
      setNumberPage(numberPage + 1);
      return;
    }
    setNumberPage(numberPage - 1);
  };

  return (
    <Box
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Grid
        container
        justifyContent={"center"}
        sx={{ gridTemplateColumns: "repeat(4, minmax(330px, 1fr))" }}
      >
        {handleLoading((sizeCard.height + 16) * 2)}
        {!loading &&
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

      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        marginRight={1}
      >
        <Button
          size="small"
          onClick={() => handleChangePage("goBack")}
          variant="contained"
          disabled={numberPage == 1}
        >
          {"<"}
        </Button>
        <Typography>{numberPage}</Typography>
        <Button
          size="small"
          onClick={() => handleChangePage("goOn")}
          variant="contained"
        >
          {">"}
        </Button>
      </Box>
    </Box>
  );
};

export default ListRepos;
