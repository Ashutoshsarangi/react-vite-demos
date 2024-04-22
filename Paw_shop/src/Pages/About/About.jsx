import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const About = (props) => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 240px)` },
        }}
      >
        <Typography paragraph>About</Typography>
      </Box>
    </>
  );
};

export default About;
