import { createBrowserRouter } from "react-router-dom";
import { CreatorDetailPage } from "../components/pages/CreatorDetailPage";
import { Layout } from "./Layout";
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
        element: <CreatorListPage />,
      },
      {
        path: "new",
        element: <AddCreator />,
      },
      {
        path: "edit/:id",
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
