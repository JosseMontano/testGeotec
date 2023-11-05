import { Box, Button, Typography } from "@mui/material";
import { opChangePage } from "../../interfaces/pagination";

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
      <Button
        size="small"
        onClick={() => handleChangePage("goBack")}
        variant="contained"
        disabled={disabled}
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
  );
};

export default Index;
