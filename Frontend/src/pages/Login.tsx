import GoogleLoginButton from "@/components/Page/LogInpageComponents/GoogleLoginButton"
import { useNavigate } from "react-router-dom";

const Login = () => {
   const navigate = useNavigate();

  const handleClick = () => {
    console.log("home");
    navigate("/"); // ✅ Correct programmatic navigation
  };
  return (
    <div>
      <GoogleLoginButton/>
      <button
      onClick={()=>(
       handleClick()
  )}
      >
        home
      </button>
    </div>
  )
}

export default Login
