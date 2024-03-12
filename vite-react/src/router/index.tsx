import React from 'react'
import App from '../App.tsx'
import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/error-page.tsx";
import WidgetA from "../components/WidgetA";
import WidgetB from "../components/WidgetB";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "widgetA",
                element: <WidgetA />
            },
            {
                path: "widgetB",
                element: <WidgetB />
            }
        ]
    },
]);

export default router;