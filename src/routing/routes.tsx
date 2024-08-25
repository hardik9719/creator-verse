import { createBrowserRouter } from "react-router-dom";
import { CreatorDetailPage } from "../components/pages/CreatorDetailPage";
import { Layout } from "./Layout";
import { HomePage } from "../components/pages/HomePage";
import { CreatorListPage } from "../components/pages/CreatorListPage";
import { AddCreator } from "../components/pages/AddCreator";
import CreatorProvider from "../creatorProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CreatorProvider>
        <Layout />
      </CreatorProvider>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "new",
        element: <AddCreator />,
      },
      {
        path: "creators",
        element: <CreatorListPage />,
      },
      {
        path: "creator/:id",
        element: <CreatorDetailPage />,
      },
    ],
  },
]);
export default router;
