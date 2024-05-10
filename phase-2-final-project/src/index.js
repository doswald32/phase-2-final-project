import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import Team from "./Team";
import Player from "./Player";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/team",
    element: <Team />,
    errorElement: <Error />,
  },
  {
    path: "/player",
    element: <Player />,
    errorElement: <Error />,
  },
  {
    path: "/add-player",
    element: <AddPlayer />,
    errorElement: <Error />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
