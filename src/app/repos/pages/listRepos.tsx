import { useState } from "react";
import UseFetch from "../../../global/hooks/useFetch";
import { getRepos } from "../services/listRepos";
import { ListRepos } from "../interfaces/listRepos";
import CardComponent from "../components/card";
//css
import { Grid, Box } from "@mui/material";
//routes
import { useParams } from "react-router-dom";
import { sizeCard } from "../styles/card";
import PaginationComp from "../../../global/components/pagination";
import { opChangePage } from "../../../global/interfaces/pagination";

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
              fullName={v.full_name}
            />
          ))}
      </Grid>

      {/* =========== PAGINATION =========== */}
      <PaginationComp
        handleChangePage={handleChangePage}
        disabled={numberPage == 1}
        numberPage={numberPage}
      />
    </Box>
  );
};

export default ListRepos;
