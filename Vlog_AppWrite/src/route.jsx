import { createBrowserRouter } from "react-router-dom";
import AllPosts from "./pages/AllPosts";
import Dashboard from "./pages/Dashboard";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "all-post",
        element: <AllPosts />,
      },
    ],
  },
]);

export default router;
