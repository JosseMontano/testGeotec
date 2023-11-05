import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { sizeCard } from "../styles/card";
import { redirectPage } from "../../../global/utilities/redirectPage";

interface Params {
  name: string;
  description: string;
  openIssues: number;
  forksCount: number;
  fullName: string;
}

const CardComponent = (params: Params) => {
  const { description, name, openIssues, forksCount, fullName } = params;

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
        <Typography variant="body2" height={80} overflow={"hidden"}>
          {showDescriptionJSX()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => redirectPage("https://github.com/" + fullName)}
        >
          Project
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
