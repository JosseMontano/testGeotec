//CSS COMPONENTS
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

interface Params {
  photo: string;
  nameUser: string;
}

const CardComponent = (params: Params) => {
  const { nameUser, photo } = params;
  return (
    <Card sx={{ display: "flex", margin: 1, minWidth: 330 }}>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={photo}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {nameUser}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Pagina usuario
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <IconButton aria-label="play/pause">Proyectos</IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default CardComponent;
