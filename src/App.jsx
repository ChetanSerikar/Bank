import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import About from "./pages/About";
import Security from "./pages/Security";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MainLayout from "./components/MainLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "careers",
          element: <Careers />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "security",
          element: <Security />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
