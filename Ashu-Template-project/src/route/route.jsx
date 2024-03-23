import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Todo from "../pages/Todo/Todo";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "item1",
        element: <h1>Hello I am Item 1</h1>,
      },
      {
        path: "lalit",
        children: [
          {
            index: true, // 1st Child dedicated to his with an idex true this is for absolute path
            element: <h1>Hello I am Lalit Sarangi</h1>,
          },
          {
            path: "amulya",
            index: true,
            element: <h1>I am Amulya Son of Lalit</h1>,
          },
          {
            path: "devi",
            element: <h1>I am Devi Son of Lalit</h1>,
          },
          {
            path: "sasmita",
            children: [
              {
                index: true,
                element: <h1>I am Sasmita Doughter of Lalit</h1>,
              },
              {
                path: "sonu",
                element: (
                  <h1>
                    I am Subhalaxmi Mishra Doughter of Sasmita & Grand Daughter
                    Lalit
                  </h1>
                ),
              },
              {
                path: "kalu",
                element: (
                  <h1>
                    I am Ram Sankar Mishra Son of Sasmita & Grand Son Lalit
                  </h1>
                ),
              },
            ],
          },
        ],
      },
      {
        path: "bansi",
        element: <h1>Hello I am Banshidhar Hotta</h1>,
      },
      {
        path: "item3",
        element: <h1>Hello I am Item 3</h1>,
      },
      {
        path: "item4",
        element: <h1>Hello I am Item 4</h1>,
      },
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "setting",
        element: <h1>Hello I am Setting Page</h1>,
      },
      {
        path: "profile",
        element: <h1>Hello I am Profile Page</h1>,
      },
    ],
  },
]);
