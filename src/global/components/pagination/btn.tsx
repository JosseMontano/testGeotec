import { Button } from "@mui/material";

interface Params {
  handleChangePage: () => void;
  disabled: boolean;
  txt: string;
}

const BtnComponent = (params: Params) => {
  const { disabled, handleChangePage, txt } = params;
  return (
    <Button
      size="small"
      onClick={handleChangePage}
      variant="contained"
      disabled={disabled}
    >
      {txt}
    </Button>
  );
};

export default BtnComponent;
