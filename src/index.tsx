import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import "./styles/global.styles.css";

// Routes settings
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn/index.tsx";
import SignUp from "./pages/SignUp/index.tsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />
  }
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="dark:bg-zinc-950 dark:text-zinc-50">
      <RouterProvider router={routes} />
    </main>
  </React.StrictMode>
);
