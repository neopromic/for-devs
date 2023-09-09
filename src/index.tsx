import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import "./styles/global.styles.css";

// Routes settings
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./pages/SignIn/index.tsx";
import SignUp from "./pages/SignUp/index.tsx";
import { ThemeProvider } from "./components/ThemeProvider/index.tsx";
import Profile from "./pages/Profile/index.tsx";
import NotFound from "./components/404NotFound/index.tsx";
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
    element: <SignUp />,
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    errorElement: <NotFound />
  }
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
