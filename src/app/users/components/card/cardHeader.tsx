import CardContent from "@mui/material/CardContent";
import VisitUser from "./visitUser";
import Name from "./name";

interface Params {
  redirectPage: (url: string) => void;
  pageUser: string;
  nameUser: string;
}

const CardHeader = ({ pageUser, redirectPage, nameUser }: Params) => {
  return (
    <CardContent sx={{ flex: "1 0 auto" }}>
      {/* ========= SHOW NAME USER ========= */}
      <Name nameUser={nameUser} />
      {/* ========= REDIRECT TO GITHUB ========= */}
      <VisitUser pageUser={pageUser} redirectPage={redirectPage} />
    </CardContent>
  );
};

export default CardHeader;
