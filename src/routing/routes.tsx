import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { CreatorCard } from "../components/CreatorCard";
import { CreatorDetailPage } from "../components/pages/CreatorDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/creator/:id",
    element: <CreatorDetailPage />,
  },
]);
export default router;
