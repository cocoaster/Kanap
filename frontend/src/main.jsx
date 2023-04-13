import App from './components/App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import ErrorPage from "./pages/Erreur404.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./styles/index.css";
import "./styles/index.scss";
import AppHome from './pages/Home.jsx';
import A_Propos from './pages/A_Propos.jsx';
import AppHeader from './components/Header.jsx'

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
    path: "/A_Propos",
    element: <AppHeader />,
    children: [
      {
        path: "/A_Propos",
        element: <A_Propos />,
      },
    ],

    

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);