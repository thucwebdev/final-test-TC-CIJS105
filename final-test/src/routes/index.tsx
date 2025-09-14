import { createBrowserRouter } from "react-router-dom";
import Active from "../pages/Active";
import All from "../pages/All";
import Completed from "../pages/Completed";
import LayoutMain from "../layout/LayoutMain";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMain />,
    children: [
      {
        index: true, // Route mặc định
        element: <All />,
      },
      {
        path: "all",
        element: <All />,
      },
      {
        path: "active",
        element: <Active />,
      },
      {
        path: "completed",
        element: <Completed />,
      },
    ],
  },
]);
