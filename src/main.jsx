import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout.jsx";
import WhatsApp from "./components/Organims/WhatsApp.jsx";
import Charts from "./components/Organims/Charts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <></> },
      { path: "/dashboard", element: <Charts /> },
      { path: "/inbox", element:  <WhatsApp /> },
      { path: "/accounts", element: <></>  },
      { path: "/schedule", element: <></>  },
      { path: "/search", element: <></>  },
      { path: "/analytics", element: <></>  },
      { path: "/files", element: <></>  },
      { path: "/setting", element: <></>  },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
