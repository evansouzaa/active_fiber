import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import('../components/layouts/FullLayout'));

/***** Pages ****/
const Login = lazy(() => import("../components/views/pages/Login"));
const Register = lazy(() => import("../components/views/pages/Register"));

// Menu pages
const Starter = lazy(() => import("../components/views/pages/Starter"));
const Activation = lazy(() => import("../components/views/ui/Activation"))
const About = lazy(() => import("../components/views/pages/About"));
const Alerts = lazy(() => import("../components/views/ui/Alerts"));
const Badges = lazy(() => import("../components/views/ui/Badges"));
const Buttons = lazy(() => import("../components/views/ui/Buttons"));
const Cards = lazy(() => import("../components/views/ui/Cards"));
const Grid = lazy(() => import("../components/views/ui/Grid"));
const Tables = lazy(() => import("../components/views/ui/Tables"));
const Forms = lazy(() => import("../components/views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../components/views/ui/Breadcrumbs"));

const Erro404 = lazy(() => import("../components/views/error/Erro404"));

//componente que valida se o usuario esta logado
const PrivateRoute = lazy(() => import("./PrivateRoute"));

//home teste
const Home = () => {

  return (
    <div>teste</div>
  )
}

/*****Routes******/
export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <FullLayout />,
        children: [
          { path: "/", element: <Navigate to="/dashboard" /> },
          { path: "/dashboard", exact: true, element: <Starter /> },
          { path: "/activation", exact: true, element: <Activation /> },
          { path: "/about", exact: true, element: <About /> },
          { path: "/alerts", exact: true, element: <Alerts /> },
          { path: "/badges", exact: true, element: <Badges /> },
          { path: "/buttons", exact: true, element: <Buttons /> },
          { path: "/cards", exact: true, element: <Cards /> },
          { path: "/grid", exact: true, element: <Grid /> },
          { path: "/table", exact: true, element: <Tables /> },
          { path: "/forms", exact: true, element: <Forms /> },
          { path: "/breadcrumbs", exact: true, element: <Breadcrumbs /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Erro404 />,
  }
]);