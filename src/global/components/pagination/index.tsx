import { Box, Typography } from "@mui/material";
import { opChangePage } from "../../interfaces/pagination";
import BtnComponent from "./btn";

interface Params {
  handleChangePage: (op: opChangePage) => void;
  disabled: boolean;
  numberPage: number;
}

const Index = (params: Params) => {
  const { handleChangePage, disabled, numberPage } = params;
  return (
    <Box
      display={"flex"}
      justifyContent={"flex-end"}
      alignItems={"center"}
      marginRight={1}
    >
      <BtnComponent
        disabled={disabled}
        handleChangePage={() => handleChangePage("goBack")}
        txt="<"
      />

      <Typography>{numberPage}</Typography>

      <BtnComponent
        disabled={disabled}
        handleChangePage={() => handleChangePage("goOn")}
        txt=">"
      />
    </Box>
  );
};

export default Index;
