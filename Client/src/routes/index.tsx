import { createBrowserRouter } from "react-router";
import Layout from "../layouts/index.tsx";
import Landing from "../pages/Landing.tsx";
import { lazy } from "react";
import SuspenseHoc from "../components/SuspenseHoc.tsx";



const RegisterPage = lazy(() => import("../pages/Register.tsx"));
const HomePage = lazy(() => import("../pages/Home.tsx"));
const LoginPage = lazy(() => import("../pages/Login.tsx"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true, 
                element: <Landing />,
            },
            {
                path: "register",
                element: <SuspenseHoc>
                    <RegisterPage />
                </SuspenseHoc>,
            },
            {
                path: "login",
                element: <SuspenseHoc>
                    <LoginPage />
                </SuspenseHoc>,
            },
            {
                path: "home",
                element: <SuspenseHoc>
                    <HomePage />
                </SuspenseHoc>,
            }
        ]
    }
])

export default router;
