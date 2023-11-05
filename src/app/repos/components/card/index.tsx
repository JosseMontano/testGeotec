import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { sizeCard } from "../../styles/card";
import { redirectPage } from "../../../../global/utilities/redirectPage";
import Title from "./title";
import SubTitle from "./subTitle";
import Description from "./description";
import Footer from "./footer";

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
        <Title name={name} />
        <SubTitle forksCount={forksCount} openIssues={openIssues} />
        <Description showDescriptionJSX={showDescriptionJSX} />
      </CardContent>

      <Footer fullName={fullName} redirectPage={redirectPage} />
    </Card>
  );
};

export default CardComponent;
