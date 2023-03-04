import { useState } from "react"
import axios from "axios"

function Register({changeForm}){
    const [newUser,setNewUser] = useState({
        "username" :"",
        "password" : ""
    })
    console.log(newUser)
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("https://wamae-pet-finder.onrender.com/user",newUser)
        changeForm()
    }
    return(
        <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit} className=" bg-red-500 p-4 m-8 flex-col justify-center items-center w-72">
            <input type="text" placeholder="username" className=" bg-red-500 text-center" onChange={(e) => setNewUser({...newUser,username:e.target.value})}></input>
            <input type="password" placeholder="password" className=" bg-red-500 text-center" onChange={(e) => setNewUser({...newUser,password:e.target.value})}></input>
            <button className="bg-red-500 ml-[5.7rem]">Register</button>
        </form>
        </div>
    )
    }

export default Register