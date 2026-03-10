import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin} style = {{cursor:"pointer",height:"60px",width:"100px",color:"white",backgroundColor:"navy",outline:"none",border:"none",borderRadius:"10px",fontSize:"20px",fontWeight:"700"}}>Login</button>
    </div>
  );
};

export default Login;