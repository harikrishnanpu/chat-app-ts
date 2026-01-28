import { useNavigate } from "react-router"
import Button from "../components/Button"



function Landing() {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-10">
      Welcome to Landing Page
      <div className="gap-10 flex">
          <Button onClickHandler={() => navigate("/register")}>Register</Button>
          <Button onClickHandler={()=> navigate("/login")}>Login</Button>
      </div>
    </div>
  )
}

export default Landing