import Typography from "@mui/material/Typography";

interface Params {
  openIssues: number;
  forksCount: number;
}
const SubTitle = ({ forksCount, openIssues }: Params) => {
  return (
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Issues abiertos: {openIssues}
      <br />
      Fork: {forksCount}
    </Typography>
  );
};

export default SubTitle;
