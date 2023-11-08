import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./lib/authConfig.js";
import axios from "./lib/axios";

import Root from "./routes/Root.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const msalInstance = new PublicClientApplication(msalConfig);

import PageLayout from "./components/PageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <Root />
      </PageLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <ToastContainer
        toastStyle={{
          backgroundColor: `hsl(var(--b3))`,
          color: `hsl(var(--bc))`,
        }}
      />
      <RouterProvider router={router} />
    </MsalProvider>
  </React.StrictMode>
);
