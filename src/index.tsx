import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import "./styles/global.styles.css";

// Routes settings
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn/index.tsx";
import SignUp from "./pages/SignUp/index.tsx";
import { ThemeProvider } from "./components/ui/ThemeProvider/index.tsx";
import Profile from "./pages/Profile/index.tsx";
import { Apresentation } from "./pages/Apresentation/index.tsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Apresentation />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/app",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <main>
        <RouterProvider router={routes} />
      </main>
    </ThemeProvider>
  </React.StrictMode>
);
