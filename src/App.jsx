import { useState } from "react";
import "./App.css";
// install imports
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// web pages
import { Home, About, Error, Login } from "./pages";
import RootLayout from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} errorElement={<Error/>}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
