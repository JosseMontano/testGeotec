//CSS COMPONENTS
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardBody from "./projects";
import CardHeader from "./cardHeader";
import { redirectPage } from "../../../../global/utilities/redirectPage";

interface Params {
  photo: string;
  nameUser: string;
  pageUser: string;
  handleRedirect: (url: string) => void;
}

const CardComponent = (params: Params) => {
  const { nameUser, photo, pageUser, handleRedirect } = params;
  return (
    <Card sx={{ display: "flex", margin: 1, minWidth: 330, maxHeight: 130 }}>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={photo}
        alt="img from the user"
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", minWidth: 330 - 150 }}
      >
        <CardHeader
          nameUser={nameUser}
          pageUser={pageUser}
          redirectPage={redirectPage}
        />

        <CardBody handleRedirect={handleRedirect} nameUser={nameUser} />
      </Box>
    </Card>
  );
};

export default CardComponent;
