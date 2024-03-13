import { createBrowserRouter } from "react-router-dom";
import { LoginPage, SignUpPage, Dashboard, PostTemplate } from "./pages";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "add-post",
        element: <PostTemplate />,
      },
    ],
  },
]);

export default router;
