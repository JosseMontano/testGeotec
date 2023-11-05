//REACT
import { useState } from "react";
import { ListUser } from "../interfaces/listUser";
import { Grid, Box } from "@mui/material";
import UseRedirect from "../../../global/hooks/useRedirect";
import UseFetch from "../../../global/hooks/useFetch";
import { getUsers } from "../services/listUser";
import ShowUsers from "../components/showUsers";
import PaginationComp from "../../../global/components/pagination";
import { opChangePage } from "../../../global/interfaces/pagination";

const ListUser = () => {
  // ======== pagination ========
  const pagination = 12;
  const [sincePage, setSincePage] = useState(0);
  //get repos
  const { data, handleLoading, loading } = UseFetch<ListUser[]>({
    service: getUsers,
    pagination: pagination,
    page: sincePage,
  });

  //redirect to repost
  const { handleRedirect } = UseRedirect();

  // ======== change Page ========
  const handleChangePage = (op: opChangePage) => {
    if (op == "goOn") {
      setSincePage(sincePage + 16);
      return;
    }
    setSincePage(sincePage - 16);
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
        {/* =========== SHOW LIST USERS =========== */}
        <ShowUsers
          data={data}
          handleLoading={handleLoading}
          handleRedirect={handleRedirect}
          loading={loading}
        />
      </Grid>
      {/* =========== PAGINATION =========== */}
      <PaginationComp
        handleChangePage={handleChangePage}
        disabled={sincePage / 16 == 0}
        numberPage={sincePage / 16 + 1}
      />
    </Box>
  );
};

export default ListUser;
