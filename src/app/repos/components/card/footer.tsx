import { Button, CardActions } from "@mui/material";

interface Params {
  redirectPage(url: string): void;
  fullName: string;
}
const Footer = ({ redirectPage, fullName }: Params) => {
  return (
    <CardActions>
      <Button
        size="small"
        onClick={() => redirectPage("https://github.com/" + fullName)}
      >
        Project
      </Button>
    </CardActions>
  );
};

export default Footer;
