import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { TextareaAutosize } from "@mui/base/TextareaAutosize";

const ContactForm = (props) => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  return (
    <FormControl fullWidth sx={{ padding: "10px" }}>
      <TextField
        id="outlined-basic"
        label="Full Name"
        variant="outlined"
        sx={{ margin: 1 }}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        sx={{ margin: 1 }}
      />
      <TextareaAutosize
        minRows={5}
        style={{
          margin: 1,
          width: "96%",
          marginLeft: "8px",
          borderRadius: "5px",
        }}
        placeholder="Enter Message"
      />
      <Button
        variant="contained"
        href="mailto:ashutoshsarangi95@gmail.com?cc=someoneelse@example.com&subject=Summer%20Party&body=You%20are%20invited%20to%20a%20big%20summer%20party!"
        sx={{ margin: 1 }}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default ContactForm;
