import "./App.css";
// install imports
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// web pages
import { Home, About, Error, Login } from "./pages";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
