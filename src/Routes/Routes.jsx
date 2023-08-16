import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Links from '../pages/Links';
import ProfileDetail from '../pages/ProfileDetail';
import Preview from '../pages/Preview';
const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Links/>
        },
        {
            path: "/profile-detail",
            element: <ProfileDetail/>
        },
        {
            path: "/preview",
            element: <Preview/>
        }
    ])
  return <RouterProvider router={router} />
}

export default Routes
