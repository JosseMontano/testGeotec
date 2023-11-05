//REACT
import { useState } from "react";

import { ListUser } from "../interfaces/listUser";
import CardComponent from "../components/card";
import { Grid, Box, Button, Typography } from "@mui/material";
import UseRedirect from "../../../global/hooks/useRedirect";
import UseFetch from "../../../global/hooks/useFetch";
import { getUsers } from "../services/listUser";

type opChangePage = "goOn" | "goBack";

const ListUser = () => {
  // ======== pagination ========
  const pagination = 12;
  const [sincePage, setSincePage] = useState(0);
  //get repos
  const { data } = UseFetch<ListUser[]>({
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
        {data.length > 0 &&
          data.map((v) => (
            <CardComponent
              nameUser={v.login}
              photo={v.avatar_url}
              pageUser={v.html_url}
              handleRedirect={handleRedirect}
              key={v.id}
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
          disabled={sincePage / 16 == 0}
        >
          {"<"}
        </Button>
        <Typography>{sincePage / 16 + 1}</Typography>
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

export default ListUser;
