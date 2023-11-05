import Typography from "@mui/material/Typography";

interface Params {
  redirectPage: (url: string) => void;
  pageUser: string;
}

const VisitUser = ({ redirectPage, pageUser }: Params) => {
  return (
    <Typography
      color="text.secondary"
      component="div"
      onClick={() => redirectPage(pageUser)}
      sx={{
        cursor: "pointer",
      }}
    >
      Visit user
    </Typography>
  );
};

export default VisitUser;
