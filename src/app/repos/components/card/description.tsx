import Typography from "@mui/material/Typography";

interface Params {
  showDescriptionJSX(): string | JSX.Element;
}
const Description = ({ showDescriptionJSX }: Params) => {
  return (
    <Typography variant="body2" height={80} overflow={"hidden"}>
      {showDescriptionJSX()}
    </Typography>
  );
};

export default Description;
