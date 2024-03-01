import { useRouteError, Link } from "react-router-dom";

const NotFound = (props) => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>
        Please go to <Link to="/home">Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
