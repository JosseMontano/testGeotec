import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { sizeCard } from "../styles/card";

interface Params {
  name: string;
  description: string;
  openIssues: number;
  forksCount: number;
}

const CardComponent = (params: Params) => {
  const { description, name, openIssues, forksCount } = params;

  //show the description of the card
  function showDescriptionJSX() {
    return description ? (
      description
    ) : (
      <b>THERE AREN'T DESCRIPTION IN THIS REPOSITORY</b>
    );
  }

  return (
    <Card sx={{ width: sizeCard.width, height: sizeCard.height, margin: 1 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Issues abiertos: {openIssues}
          <br />
          Fork: {forksCount}
        </Typography>
        <Typography variant="body2">{showDescriptionJSX()}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Sitio de github</Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
