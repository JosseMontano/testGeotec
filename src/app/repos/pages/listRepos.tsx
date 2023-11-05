import { useState } from "react";
import UseFetch from "../../../global/hooks/useFetch";
import { getRepos } from "../services/listRepos";
import { ListRepos } from "../interfaces/listRepos";

//css
import { Box } from "@mui/material";
//routes
import { useParams } from "react-router-dom";

import PaginationComp from "../../../global/components/pagination";
import { opChangePage } from "../../../global/interfaces/pagination";
import ShowRepos from "../components/showRepos";

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

  // ======== change number page ========
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
      <ShowRepos data={data} handleLoading={handleLoading} loading={loading} />
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
