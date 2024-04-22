import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ContactForm from "../../Components/ContactForm/ContactForm";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Contact = (props) => {
  return (
    <CardContent>
      <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Item>
            <ContactForm />
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <Item>xs=4</Item> */}
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default Contact;
