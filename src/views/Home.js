import { useStore } from "zustand";
import { petsStore } from "../data/PetsStore";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Register from "../components/Register";
import Login from "../components/Login";

function Home() {
  const [showRegister,showLogin] = useState(true)
  const changeForm = () =>{
    showLogin(!showRegister)
  }
if(showRegister === true){
  return (<>
    <h1>Hi, welcome to Petfinder!</h1>
    <Register changeForm={changeForm}/>
    </>);
}else{
  return (<>
    <h1>Hi, welcome to Petfinder!</h1>
    <Login changeForm={changeForm}/>
    </>);
}
}

export default Home;