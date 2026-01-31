import { useNavigate } from "react-router";
import { useAppSelector, type RootState } from "../redux/store"
import { useEffect } from "react";


function Home() {

    const navigate = useNavigate();

    const { isAuthenticated, user } = useAppSelector((state: RootState) => state.auth);

    useEffect(() => {

        if (!isAuthenticated || !user) {
            navigate('/login');
            return;
        }
         
    }, [isAuthenticated, user, navigate]);

  return (
      <div className="min-w-screen align-center justify-center">
          <h6 className="text-center">Hi, {user.name}</h6>
    </div>
  )
}

export default Home