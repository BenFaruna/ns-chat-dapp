import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import '@radix-ui/themes/styles.css';

import { Theme } from "@radix-ui/themes";

import Root from './routes/Root';
import ErrorPage from './ErrorPage';
import NameService from './routes/NameService';
import Chat from './routes/Chat';
import Message from './components/Message';

import { configureWeb3Modal } from "./connections";

configureWeb3Modal()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <NameService />,
      },
      {
        path: "/chat",
        element: <Chat />,
        children: [
          {
            path: "/chat/:domainName",
            element: <Message />,
          },
        ]
      },
      // {
      //   path: "/chat/:domainName",
      //   element: <Chat />,
      // },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>,
)
