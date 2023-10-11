import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "./layout/Auth";
import HomeApp from "./layout/HomeApp";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from "./pages/ErrorPage";

const routeList = createBrowserRouter([
  {
    element: <Auth />,
    children: [
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/signup", element: <SignUp /> },
    ],
  },
  {
    element: <HomeApp />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={routeList} />
    </div>
  );
}

export default App;
