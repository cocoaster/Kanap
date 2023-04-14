import App from './components/App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from './context/index.jsx';
import Root from "./routes/root";
import ErrorPage from "./pages/Error404.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./styles/index.css";
import "./styles/index.scss";
import AppHome from './pages/Home.jsx';
import About from './pages/About.jsx';
import AppHeader from './components/Header.jsx';
import List from './components/ApartmentsList.jsx'
import ApartmentCard from './pages/Apartement_File.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppHeader />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <AppHome />,
        },
      ],
    },
    {
      path: "/About",
      element: <AppHeader />,
      children: [
        {
          path: "/About",
          element: <About />,
        },
      ],
    },
  {
    path: "/Apartment/:title",
    element: <AppHeader />,
    children: [
      {
        path: "/Apartment/:title",
        element: <ApartmentCard />,
      },
    ],

    

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AppProvider>
      <App/>
    </AppProvider> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);