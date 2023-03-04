import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {useEffect} from "react"
import axios from "axios";
import { useStore } from "zustand";
import { petsStore } from "../data/PetsStore";

function Login() {
  const pets = useStore(petsStore)
  const [users,setUsers] = useState([])
  console.log(users)
  useEffect(()=>{
   axios.get("https://wamae-pet-finder.onrender.com").then((r) =>
    setUsers(r.data)
   )
  },[])
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  //console.log(login);
  const redirect = useNavigate();
  const handleSubmit = (e) => {
     e.preventDefault();
    //map through the users array
    let found_user = users.filter((user) =>{
      return user.username === login.username
    })
    if(found_user.length !== 0){
    if(found_user[0].password === login.password){
    
      axios.get(`https://wamae-pet-finder.onrender.com/pets/${found_user[0].username}`).then((r) =>{
      pets.setPetsStore(r.data) 
      redirect("/mypets")}     
      )
 
    }else{
      alert("Incorrect password")
    }}else{
      alert("Incorrect username")
    }
    //if the username entered by the user in login 
    //check the password
    //if they dont match alert incorrect password
    //matches the  username in login redirect them to my pets 
    //page and change the store to a fetch for that users pets
    //if the username does not match alert:
    // "a user with this name does not exist"
  
   
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setLogin({ ...login, username: e.target.value })}
      ></input>
      <input type="password" placeholder="password" onChange={(e) => setLogin({
        ...login, password:e.target.value
      })}></input>
      <button>Login</button>
    </form>
  );
}
export default Login;
