
import { lazy } from "react";
import SuspenseHoc from "../../components/SuspenseHoc";
import LoginGuard from "../../login-guard/LoginGuard";



const LoginPage = lazy(() => import("../../pages/Login"));
const RegisterPage = lazy(() => import("../../pages/Register"));


export const authRoutes = [
  {
    path: "/",
    element: <LoginGuard />,
  children: [
    {
      path: "register",
      element: <SuspenseHoc>
      <RegisterPage />
    </SuspenseHoc>
  },
  {
    path: "login",
    element: <SuspenseHoc>
      <LoginPage />
    </SuspenseHoc>
    },
  ]
}
];
