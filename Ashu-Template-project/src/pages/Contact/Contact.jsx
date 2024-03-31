import { useLoaderData, Link } from "react-router-dom";
import { generateContact } from "./Contact.utils";

// export const contactLoader = async ({ params }) => {
//   const contact = await generateContact(params.contactId);
//   return { contact };
// };

const Contact = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="card card-side bg-base-100 shadow-xl static m-2 p-2">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="h-[350px] w-[350px]"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Nick Panagi</h2>
          <p>I am Nick Panagi, Feel free to reach out to me...</p>
          <i>
            <i className="fa-solid fa-phone mr-3"></i> +357 99957077
          </i>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl static m-2 p-2">
        <figure>
          <img
            src="https://ashutoshsarangi.github.io/portfolio/static/media/Dp1.0e256a15187daa7078c7.jpeg"
            className="h-[350px] w-[350px]"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Ashutosh</h2>
          <p>I am Ashutosh Sarangi! Feel free to reach out to me.</p>
          <i>
            <i className="fa-solid fa-phone mr-3"></i> +357 95744640
          </i>
        </div>
      </div>
    </div>
  );
};

export default Contact;
