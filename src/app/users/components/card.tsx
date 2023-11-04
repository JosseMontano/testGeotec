//CSS COMPONENTS
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { redirectPage } from "../../../global/utilities/redirectPage";
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
        alt="Live from space album cover"
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", minWidth: 330 - 150 }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {nameUser}
          </Typography>
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
        </CardContent>
        <Box sx={{ display: "flex", justifyContent: "flex-end", pb: 1, pr: 1 }}>
          <Typography
            color="text.secondary"
            component="div"
            onClick={() => handleRedirect("repo/" + nameUser)}
            sx={{
              cursor: "pointer",
            }}
          >
            Proyectos
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default CardComponent;
