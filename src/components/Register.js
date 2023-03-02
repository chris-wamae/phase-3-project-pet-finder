
function Register({changeForm}){
    const handleSubmit = (e) =>{
        e.preventDefault()
        changeForm()
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="username"></input>
            <input type="password" placeholder="password"></input>
            <button>Register</button>
        </form>
    )
    }

export default Register;