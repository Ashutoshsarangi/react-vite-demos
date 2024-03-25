import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <h1> Oops!</h1>
      <p>Sorry, An UnExpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/dashboard" className="btn btn-primary">
        Go To Dashboard
      </Link>
    </div>
  );
};

export default ErrorPage;
