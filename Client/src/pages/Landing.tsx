import { useEffect } from "react";
import Button from "../components/Button"
import { useNavigate } from "react-router"
import { useAppSelector, type RootState } from "../redux/store";



function Landing() {

  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
        navigate('/user/home');
        return;
    }

  },[navigate, isAuthenticated ])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-10">
      Welcome to Landing Page of chat app
      <div className="gap-10 flex">
          <Button onClickHandler={() => navigate("/register")}>Register</Button>
          <Button onClickHandler={()=> navigate("/login")}>Login</Button>
      </div>
    </div>
  )


}

export default Landing