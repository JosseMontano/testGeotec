import Typography from "@mui/material/Typography";

interface Params {
  name: string;
}

const Title = ({ name }: Params) => {
  return (
    <Typography variant="h5" component="div">
      {name}
    </Typography>
  );
};

export default Title;
