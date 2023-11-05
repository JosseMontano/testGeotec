import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface Params {
  handleRedirect: (url: string) => void;
  nameUser: string;
}

const Projects = ({ handleRedirect, nameUser }: Params) => {
  return (
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
  );
};

export default Projects;
