import { useLoaderData, Link } from "react-router-dom";
import { generateContact } from "./Contact.utils";

export const contactLoader = async ({ params }) => {
  const contact = await generateContact(params.contactId);
  return { contact };
};

const Contact = (props) => {
  const contact = useLoaderData();
  return (
    <div>
      Contact is --- {contact.contact}
      <br></br>
      <Link to="/contact/1" className="btn btn-primary">
        Contact 1
      </Link>
      <Link to="/contact/2" className="btn btn-primary">
        Contact 2
      </Link>
      <Link to="/contact/3" className="btn btn-primary">
        Contact 3
      </Link>
    </div>
  );
};

export default Contact;
