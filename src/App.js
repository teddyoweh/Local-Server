import React from "react";
import {
  createBrowserRouter,RouterProvider 
} from "react-router-dom";

import 'boxicons';
import './assets/main.scss'
import './assets/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './views/Login';
import Dashboard from './views/Dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "/:ftp*",
          element: <Dashboard />,
        },
      ],
    },
    
    {
    path: "/login",
    element:<Login/>
    }
  ]);
  return (
    <RouterProvider router={router} />
     
   
       
           


  );
}

export default App;
