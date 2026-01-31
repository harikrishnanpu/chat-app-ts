import { lazy } from "react";
import AuthGuard from "../../auth-guard/AuthGuard";
import SuspenseHoc from "../../components/SuspenseHoc";


const HomePage = lazy(() => import("../../pages/Home"));
const ChatInboxPage = lazy(() => import("../../pages/chat/Inbox")); 

export const userRoutes = [
  {
    path: "user",
    element: <AuthGuard />,
    children: [
      {
        path: "home",
        element: <SuspenseHoc>
          <HomePage />
        </SuspenseHoc>,
      },
      {
        path: "chat",
        element: <SuspenseHoc>
          <ChatInboxPage />
        </SuspenseHoc>,
      }
    ],
  },
];
