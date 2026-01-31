import { useEffect } from "react";
import { Outlet } from "react-router";
import { getUser } from "../services/auth.services";
import { useAppDispatch } from "../redux/store";
import { setUser } from "../redux/Slices/authSlice";




function Layout() {

  const dispatch = useAppDispatch();

  useEffect(() => {

    const he = async () => {
      const response = await getUser();
      dispatch(setUser({ user: response.data.user }));
    }

    he();
  },[ dispatch ])

  return (
    <div className="container mx-auto min-w-screen">
        <Outlet />
    </div>
  )
}

export default Layout;