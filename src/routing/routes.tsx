import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { CreatorCard } from "../components/CreatorCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/creator/:id",
    element: <CreatorCard />,
  },
]);
export default router;
