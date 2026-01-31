import { createBrowserRouter } from "react-router";
import Layout from "../layouts/index.tsx";
import Landing from "../pages/Landing.tsx";
import { authRoutes } from "./auths/auth.routes.tsx";
import { userRoutes } from "./user/user.routes.tsx";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true, 
                element: <Landing />,
            },
            ...authRoutes,
            ...userRoutes
        ],
        errorElement: <div className="min-w-screen text-center">404 Not Found</div>
    }
])

export default router;
