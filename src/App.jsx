import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Movie from "./pages/Movie";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "movie/:Title",
          element: <Movie />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
