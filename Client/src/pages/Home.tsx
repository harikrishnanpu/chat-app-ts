
import { useNavigate } from "react-router";
import { useAppSelector, type RootState } from "../redux/store"


function Home() {
  
  const navigate = useNavigate();
    const { user } = useAppSelector((state: RootState) => state.auth);

  if (!user) return (<div>something went wrong</div>)
  

  return (
      <div className="min-w-screen align-center justify-center">
      <h6 className="text-center">Hi, {user.name}</h6>
      <button onClick={()=> navigate('/user/chat')}>Chat</button>
    </div>
  )
}

export default Home