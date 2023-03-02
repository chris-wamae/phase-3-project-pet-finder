import { useNavigate } from "react-router-dom";
function Login(){
    const redirect = useNavigate()
    const handleSubmit = (e) =>{
     e.preventDefault()
     redirect("/mypets")
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username"></input>
            <input type="password" placeholder="password"></input>
            <button>Login</button>
        </form>
    )
    }
    export default Login;