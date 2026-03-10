import {useNavigate} from "react-router-dom";


const Login =()=>{
    const {login} = useAuth();
    const nav = useNavigate();

    const handleLog = ()=>{
        login();
        nav("/");
    };

    return (
        <div style = {{padding:"50px"}}>
            <h2>Login</h2>
            <button onClick = {handleLog} style = {{height:"60px",width:"200px",color:"white",backgroundColor:"navy",fontSize:"20px",fontWeight:"700",outline:"none",border:"none",borderRadius:"10px"}}>Login</button>
        </div>
    );

};

export default Login;