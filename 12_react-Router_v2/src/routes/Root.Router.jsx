import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home, Cart, Contact, About, NotFound } from "../pages";

const rootRouter = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default rootRouter;
