import { useState } from "react";

const ContactForm = (props) => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  return (
    <form>
      <button href="mailto:ashutoshsarangi95@gmail.com?cc=someoneelse@example.com&subject=Summer%20Party&body=You%20are%20invited%20to%20a%20big%20summer%20party!">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
