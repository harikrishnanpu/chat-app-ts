
import { Outlet, useNavigate } from "react-router";
import { useAppSelector, type RootState } from "../redux/store"




function LoginGuard() {

    const navigate = useNavigate();
    const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);

    if (isAuthenticated) {
        navigate('/user/home');
        return;
    }

  return (
      <>
          <Outlet />
    </>
  )
}

export default LoginGuard;