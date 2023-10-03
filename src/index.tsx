import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./styles/global.styles.css";

// Routes settings
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn/index.tsx";
import SignUp from "./pages/SignUp/index.tsx";
import { ThemeProvider } from "./components/ui/ThemeProvider/index.tsx";
import Profile from "./pages/Profile/index.tsx";
import { Apresentation } from "./pages/Apresentation/index.tsx";
import NotFound from "./components/ui/404NotFound/index.tsx";
import { AuthProvider } from "./utils/api/auth/authContextApi/index.tsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Apresentation />,
    errorElement: <NotFound />,
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
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <main>
          <RouterProvider router={routes} />
        </main>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
