import Typography from "@mui/material/Typography";

interface Params {
  nameUser: string;
}

const Name = ({ nameUser }: Params) => {
  return (
    <Typography component="div" variant="h5">
      {nameUser}
    </Typography>
  );
};

export default Name;
